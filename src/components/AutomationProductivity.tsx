import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ResponsiveContainer,
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Scatter,
  ZAxis
} from 'recharts';
import { Card } from './ui/card';
import { Clock, Bot, Cloud } from 'lucide-react';
import SectionContainer from './SectionContainer';

type AutomationSuite = {
  name: string;
  automation: number;
  timeSaved: number;
  logo: string;
  description: string;
  highlight?: boolean;
};

const automationData: AutomationSuite[] = [
  {
    name: 'Tally',
    automation: 2,
    timeSaved: 2,
    logo: '/logos/tally.png',
    description:
      'Manual-first ledger and inventory engine. Automation needs plugins or macros, so accountants still reconcile spreadsheets and vouchers by hand.'
  },
  {
    name: 'Busy',
    automation: 3,
    timeSaved: 3,
    logo: '/logos/busy.png',
    description:
      'Desktop ERP with configurable masters. Offers some auto-postings, yet repetitive GST filings and reconciliations require manual exports.'
  },
  {
    name: 'Marg',
    automation: 3,
    timeSaved: 3,
    logo: '/logos/marg.png',
    description:
      'Retail-focused billing and inventory. Provides barcode and GST utilities, but workflows stay operator-driven with limited AI assistance.'
  },
  {
    name: 'Zoho Books',
    automation: 5,
    timeSaved: 5,
    logo: '/logos/zoho-books.png',
    description:
      'Cloud accounting with automation rules for invoices and reminders. Advanced processes, however, depend on add-ons across the Zoho suite.'
  },
  {
    name: 'myBillBook',
    automation: 4,
    timeSaved: 4,
    logo: '/logos/mybillbook.png',
    description:
      'Mobile-first billing with smart reminders. Good for collections, but still needs staff input for purchase reconciliation or statutory workflows.'
  },
  {
    name: 'Suvit',
    automation: 8,
    timeSaved: 7,
    logo: '/logos/suvit.png',
    description:
      'Automation wrapper atop Tally/Busy. Uses bots to import data and file GST, yet relies on external ERPs for bookkeeping context.'
  },
  {
    name: 'ClearTax',
    automation: 8,
    timeSaved: 7,
    logo: '/logos/cleartax.png',
    description:
      'Compliance automation platform for GST, TDS, and ITR. Streamlines filings, but accounting teams still juggle separate ledgers and approvals.'
  },
  {
    name: 'Zaudit',
    automation: 9.5,
    timeSaved: 9.5,
    logo: '/logos/zaudit.svg',
    description:
      'Agentic accounting that ingests documents, posts entries, reconciles, and files compliance in one place — creating audit-ready books automatically.',
    highlight: true
  }
];

export default function AutomationProductivity() {
  const [activeSuite, setActiveSuite] = useState<AutomationSuite>(() => {
    const highlighted = automationData.find(entry => entry.highlight);
    return highlighted ?? automationData[0];
  });

  const renderLogoNode = (props: any) => {
    const { cx, cy, payload } = props;
    const suite = payload as AutomationSuite;
    const size = suite.highlight ? 60 : 46;
    const clipId = `clip-automation-${suite.name.replace(/\s+/g, '-').toLowerCase()}`;

    if (typeof cx !== 'number' || typeof cy !== 'number') {
      return null;
    }

    return (
      <g
        transform={`translate(${cx}, ${cy})`}
        onClick={() => setActiveSuite(suite)}
        role="button"
        tabIndex={0}
        style={{ cursor: 'pointer' }}
        onKeyDown={event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setActiveSuite(suite);
          }
        }}
      >
        <defs>
          <clipPath id={clipId}>
            <circle cx="0" cy="0" r={size / 2} />
          </clipPath>
        </defs>
        <title>{suite.name}</title>
        <circle
          cx={0}
          cy={0}
          r={(size / 2) + (suite.highlight ? 6 : 4)}
          fill={suite.highlight ? '#0f766e22' : '#e5e7eb70'}
        />
        <image
          href={suite.logo}
          width={size}
          height={size}
          x={-size / 2}
          y={-size / 2}
          clipPath={`url(#${clipId})`}
          preserveAspectRatio="xMidYMid slice"
        />
        <circle
          cx={0}
          cy={0}
          r={size / 2}
          fill="none"
          stroke={suite.highlight ? '#0f766e' : '#d1d5db'}
          strokeWidth={suite.highlight ? 3 : 2}
        />
        <text
          x={0}
          y={size / 2 + 18}
          textAnchor="middle"
          fontSize={12}
          fill="#111827"
          style={{ fontWeight: suite.highlight ? 600 : 500 }}
        >
          {suite.name}
        </text>
      </g>
    );
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload?.length) {
      return null;
    }

    const suite = payload[0].payload as AutomationSuite;

    return (
      <div className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 shadow-sm text-sm text-[#111827]">
        <div className="font-semibold">{suite.name}</div>
        <div className="text-xs text-[#6B7280]">Click to view more</div>
      </div>
    );
  };

  return (
    <SectionContainer className="bg-[#F9FAFB]">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl lg:text-4xl mb-4">Built to do the work for you.</h3>
          <p className="text-[#6B7280] max-w-3xl mx-auto text-lg">
            Most accounting tools digitize workflows. Zaudit automates them. From AI-driven reconciliation and error detection
            to smart payroll and compliance filing, Zaudit eliminates repetitive data entry and manual bookkeeping — saving up to 80% of accountant time.
            While Suvit and ClearTax automate compliance tasks, Zaudit pairs that intelligence with complete accounting, inventory, and reporting —
            a true end-to-end agentic accounting suite for SMEs.
          </p>
      </motion.div>

      <Card className="p-6 rounded-2xl border-2 border-[#E5E7EB] bg-white">
          <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid stroke="#e5e7eb" />
                <XAxis
                  type="number"
                  dataKey="automation"
                  name="Automation"
                  domain={[0, 10]}
                  tick={{ fill: '#6B7280' }}
                  label={{
                    value: '→ More automation in workflows',
                    position: 'insideBottomRight',
                    offset: -10,
                    fill: '#4B5563',
                    style: { fontSize: 12 }
                  }}
                />
                <YAxis
                  type="number"
                  dataKey="timeSaved"
                  name="Time Saved"
                  domain={[0, 10]}
                  tick={{ fill: '#6B7280' }}
                  label={{
                    value: '↑ Hours saved each month',
                    angle: -90,
                    position: 'insideLeft',
                    offset: 10,
                    fill: '#4B5563',
                    style: { fontSize: 12 }
                  }}
                />
                <ZAxis type="number" range={[80, 160]} dataKey={() => 120} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
                <Scatter data={automationData} shape={renderLogoNode} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 grid gap-4 rounded-xl border border-[#E5E7EB] bg-[#F3F4F6] p-6 text-left md:grid-cols-[auto,1fr] md:items-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-[#D1D5DB] bg-white p-2">
              <img
                src={activeSuite.logo}
                alt={`${activeSuite.name} logo`}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="text-xl font-semibold text-[#111827]">{activeSuite.name}</div>
              <div className="mt-2 text-base leading-relaxed text-[#4B5563]">
                {activeSuite.description}
              </div>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-[#2563EB]">
                <span className="rounded-full bg-white px-3 py-1 font-medium text-[#1F2937]">
                  Automation score: {activeSuite.automation}/10
                </span>
                <span className="rounded-full bg-white px-3 py-1 font-medium text-[#1F2937]">
                  Time saved: {activeSuite.timeSaved}/10
                </span>
                {activeSuite.highlight ? (
                  <span className="rounded-full bg-[#0f766e] px-3 py-1 font-medium text-white">
                    Zaudit Automation Edge
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#008080]/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#008080]" />
              </div>
              <span className="text-[#374151]">Up to 80% less manual work</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#008080]/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#008080]" />
              </div>
              <span className="text-[#374151]">1-click GST, payroll, reconciliation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#008080]/10 flex items-center justify-center">
                <Cloud className="w-5 h-5 text-[#008080]" />
              </div>
              <span className="text-[#374151]">Works anywhere — no installation</span>
            </div>
          </div>
      </Card>
    </SectionContainer>
  );
}

