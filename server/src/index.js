import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import pino from 'pino';
import { z } from 'zod';

dotenv.config();

const {
  PORT = 4000,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PASS,
  MAIL_FROM = '"Zaudit Early Access" <zaudit.co@gmail.com>',
  MAIL_TO = 'zaudit.co@gmail.com',
  ALLOWED_ORIGINS,
} = process.env;

const logger = pino({
  level: process.env.LOG_LEVEL ?? 'info',
  transport: process.env.NODE_ENV !== 'production'
    ? {
        target: 'pino-pretty',
        options: { colorize: true, translateTime: 'SYS:standard' },
      }
    : undefined,
});

const app = express();

const corsOrigins = ALLOWED_ORIGINS?.split(',').map((origin) => origin.trim()).filter(Boolean);

app.use(
  cors({
    origin: corsOrigins?.length ? corsOrigins : true,
    methods: ['POST', 'OPTIONS'],
    credentials: false,
  })
);

app.use(express.json());

const submissionSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  businessType: z.string().min(2, 'Business type is required'),
  city: z.string().min(2, 'City is required'),
});

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT ? Number(SMTP_PORT) : undefined,
  secure: SMTP_SECURE === 'true',
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
});

async function verifyTransporter() {
  try {
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      throw new Error('SMTP credentials are missing. Check environment variables.');
    }
    await transporter.verify();
    logger.info('SMTP connection verified');
  } catch (error) {
    logger.error({ err: error }, 'Failed to verify SMTP connection');
    process.exitCode = 1;
  }
}

app.post('/api/contact', async (req, res) => {
  try {
    const submission = submissionSchema.parse(req.body);

    if (!MAIL_TO || !MAIL_FROM) {
      logger.error('MAIL_TO and MAIL_FROM environment variables are required');
      return res.status(500).json({ success: false, message: 'Mail configuration missing' });
    }

    const mailOptions = {
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `[Zaudit] New early access request from ${submission.name}`,
      text: [
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Business Type: ${submission.businessType}`,
        `City: ${submission.city}`,
        `Submitted At: ${new Date().toISOString()}`,
      ].join('\n'),
      html: `
        <h2>New Early Access Request</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Business Type:</strong> ${submission.businessType}</p>
        <p><strong>City:</strong> ${submission.city}</p>
        <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    logger.info({ submission }, 'Submission forwarded via email');

    res.json({ success: true, message: 'Request received. We will be in touch soon.' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.flatten().fieldErrors,
      });
    }

    logger.error({ err: error }, 'Failed to send email');
    res.status(500).json({
      success: false,
      message: 'Could not submit request. Please try again later.',
    });
  }
});

app.get('/healthz', async (_req, res) => {
  try {
    await transporter.verify();
    res.json({ ok: true, smtp: true });
  } catch (error) {
    logger.error({ err: error }, 'Health check failed');
    res.status(500).json({ ok: false, smtp: false });
  }
});

app.listen(Number(PORT), () => {
  logger.info(`Server listening on port ${PORT}`);
  verifyTransporter();
});



