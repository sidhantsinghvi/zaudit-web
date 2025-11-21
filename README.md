
# Zaudit Landing Page & Form Backend

This repository now contains both the Vite landing page and a lightweight Express backend that delivers form submissions to email via SMTP (Gmail-ready).

## Frontend (Vite)
- Install dependencies: `npm install`
- Local dev: `npm run dev`
- The form automatically connects to the backend via Vite proxy in development (no configuration needed).
- For production, create a `.env` file with `VITE_API_URL=https://your-backend-url.com` (see `.env.example`).

## Backend (Express + Nodemailer)
```
cd server
npm install
cp env.example .env
```

Update `.env` with your Gmail SMTP details:
- Generate a Gmail App Password (Google Account → Security → App passwords).
- Set `SMTP_USER` to your Gmail address and `SMTP_PASS` to the 16-character app password.
- Set `MAIL_TO` to the inbox where submissions should land (can match `SMTP_USER`).
- Optionally adjust `ALLOWED_ORIGINS` with the frontend URLs allowed to post.

Run locally:
```
npm run dev
```
This starts the server on `http://localhost:4000` and verifies SMTP connectivity at boot.

## GitHub Actions → Fly.io Deployment (Free Tier)
Fly.io includes a free allocation (3 shared vCPUs / 160MB RAM / 100GB outbound) which is enough for this service.

1. Install the Fly CLI locally (`curl -L https://fly.io/install.sh | sh`) and run `fly auth signup` or `fly auth login`.
2. Update the `app` name inside `fly.toml` to something unique (Fly apps share a global namespace), then run `fly launch --now --path server --config fly.toml` or `fly apps create <your-app-name>`.
3. Configure Fly secrets to match `server/env.example`:
   ```
   fly secrets set SMTP_USER=... SMTP_PASS=... MAIL_FROM="..." MAIL_TO=... --app zaudit-form-backend
   ```
4. Deploy locally with `fly deploy --config fly.toml`.
5. Optional automation: generate a deploy token (`fly auth token`) and add it to GitHub as `FLY_API_TOKEN`. The `.github/workflows/fly-deploy.yml` workflow deploys on pushes to `main` when `server/**` changes.

Monthly cost: Fly.io free tier covers this backend. Gmail SMTP remains free; you still use the app password.

## Health Check
- Backend exposes `/healthz` for uptime checks.
- Form POST endpoint: `POST /api/contact`

## Troubleshooting
- Receiving a 500 from the API usually means missing SMTP env variables.
- Gmail app passwords can be revoked automatically if there are suspicious logins – generate a new one if emails stop arriving.
  
