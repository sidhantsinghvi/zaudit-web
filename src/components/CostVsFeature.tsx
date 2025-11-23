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
import SectionContainer from './SectionContainer';

type Competitor = {
  name: string;
  cost: number;
  depth: number;
  logo: string;
  description: string;
  highlight?: boolean;
};

const competitors: Competitor[] = [
  {
    name: 'Tally',
    cost: 8,
    depth: 9,
    logo: '/logos/tally.png',
    description:
      'On-premise ERP suite with strong inventory and compliance coverage, but requires desktop deployment, licenses, and manual upkeep.'
  },
  {
    name: 'Marg',
    cost: 7,
    depth: 8,
    logo: '/logos/marg.png',
    description:
      'Retail-focused ERP known for GST invoicing and pharma workflows, yet depends on local installations and partner-driven customization.'
  },
  {
    name: 'Suvit',
    cost: 5,
    depth: 6,
    logo: '/logos/suvit.png',
    description:
      'Automation bot layer for legacy ERPs. Adds data-import flows, but you still maintain Tally/Busy setups and reconcile changes manually.'
  },
  {
    name: 'ClearTax',
    cost: 6,
    depth: 6,
    logo: '/logos/cleartax.png',
    description:
      'Compliance-first suite with GST, TDS, and tax filing. Integrates with accounting tools, yet core bookkeeping lives outside its platform.'
  },
  {
    name: 'Zoho Books',
    cost: 7,
    depth: 7,
    logo: '/logos/zoho-books.png',
    description:
      'Cloud-native accounting inside the Zoho suite. Automates billing, but advanced inventory, branches, and automation require higher-tier bundles.'
  },
  {
    name: 'Busy',
    cost: 6,
    depth: 7,
    logo: '/logos/busy.png',
    description:
      'Desktop-first accounting trusted by distributors and traders. Offers flexible masters but needs LAN/VPN setups and manual data sync.'
  },
  {
    name: 'myBillBook',
    cost: 4,
    depth: 5,
    logo: '/logos/mybillbook.png',
    description:
      'Mobile-first billing for MSMEs. Great for invoicing and collections, but limited ledgers, workflows, and integrations for growing teams.'
  },
  {
    name: 'Giddh',
    cost: 5,
    depth: 6,
    logo: '/logos/giddh.png',
    description:
      'GST-ready accounting with live bank feeds. Covers basics well, though automation and process controls remain lightweight.'
  },
  {
    name: 'ProfitBooks',
    cost: 3,
    depth: 4,
    logo: '/logos/profitbooks.png',
    description:
      'Simple cloud bookkeeping suited for service SMBs. Eases invoicing and cashflow tracking, but lacks deep inventory or workflow automation.'
  },
  {
    name: 'Vyapar',
    cost: 3,
    depth: 3,
    logo: '/logos/vyapar.png',
    description:
      'Popular GST billing app for retailers with Android-first workflows. Strong offline support, yet limited for multi-branch or audit-ready books.'
  },
  {
    name: 'Zaudit',
    cost: 4,
    depth: 9.5,
    logo: '/logos/zaudit.svg',
    description:
      'Unified accounting + automation platform built for Indian mid-market. AI reconciliations, compliance workflows, and audit trails out of the box.',
    highlight: true
  }
];

export default function CostVsFeature() {
  const [activeCompany, setActiveCompany] = useState<Competitor>(() => {
    const highlighted = competitors.find(entry => entry.highlight);
    return highlighted ?? competitors[0];
  });

  const renderLogoNode = (props: any) => {
    const { cx, cy, payload } = props;
    const company = payload as Competitor;
    const size = company.highlight ? 62 : 48;
    const clipId = `clip-cost-feature-${company.name.replace(/\s+/g, '-').toLowerCase()}`;

    if (typeof cx !== 'number' || typeof cy !== 'number') {
      return null;
    }

    return (
      <g
        transform={`translate(${cx}, ${cy})`}
        onClick={() => setActiveCompany(company)}
        role="button"
        style={{ cursor: 'pointer' }}
        tabIndex={0}
        onKeyDown={event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setActiveCompany(company);
          }
        }}
      >
        <defs>
          <clipPath id={clipId}>
            <circle cx="0" cy="0" r={size / 2} />
          </clipPath>
        </defs>
        <title>{company.name}</title>
        <circle
          cx={0}
          cy={0}
          r={(size / 2) + (company.highlight ? 6 : 4)}
          fill={company.highlight ? '#0f766e22' : '#e5e7eb70'}
        />
        <image
          href={company.logo}
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
          stroke={company.highlight ? '#0f766e' : '#d1d5db'}
          strokeWidth={company.highlight ? 3 : 2}
        />
        <text
          x={0}
          y={size / 2 + 18}
          textAnchor="middle"
          fontSize={12}
          fill="#111827"
          style={{
            fontWeight: company.highlight ? 600 : 500,
            paintOrder: 'stroke',
            stroke: '#ffffff',
            strokeWidth: 3
          }}
        >
          {company.name}
        </text>
      </g>
    );
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload?.length) {
      return null;
    }

    const company = payload[0].payload as Competitor;

    return (
      <div className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 shadow-sm text-sm text-[#111827]">
        <div className="font-semibold">{company.name}</div>
        <div className="text-xs text-[#6B7280]">Click to view more</div>
      </div>
    );
  };

  return (
    <SectionContainer className="bg-white">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl lg:text-4xl mb-4">More power, less cost.</h3>
          <p className="text-[#6B7280] max-w-3xl mx-auto text-lg">
            Compared to desktop incumbents like Tally and Marg or subscription-heavy suites like Zoho Books,
            Zaudit offers full ERP functionality — general ledger, inventory, payroll, billing, and reporting — at a fraction of the cost.
            Cloud-native, real-time synced, and ready for GST, e-invoicing, and multi-branch out of the box.
          </p>
      </motion.div>

      <Card className="p-6 rounded-2xl border-2 border-[#E5E7EB] bg-white">
          <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid stroke="#e5e7eb" />
                <XAxis
                  type="number"
                  dataKey="cost"
                  name="Cost"
                  domain={[0, 10]}
                  tick={{ fill: '#6B7280' }}
                  label={{
                    value: 'Higher cost →',
                    position: 'insideBottomRight',
                    offset: -10,
                    fill: '#4B5563',
                    style: { fontSize: 12 }
                  }}
                />
                <YAxis
                  type="number"
                  dataKey="depth"
                  name="Feature Depth"
                  domain={[0, 10]}
                  tick={{ fill: '#6B7280' }}
                  label={{
                    value: '↑ Deeper feature coverage',
                    angle: -90,
                    position: 'insideLeft',
                    offset: 10,
                    fill: '#4B5563',
                    style: { fontSize: 12 }
                  }}
                />
                <ZAxis type="number" range={[80, 160]} dataKey={() => 120} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
                <Scatter data={competitors} shape={renderLogoNode} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center mt-6 text-[#374151]">
            All-in-one power — without Tally’s complexity or Zoho’s price tag.
          </div>
          <div className="mt-8 grid gap-4 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 text-left md:grid-cols-[auto,1fr] md:items-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-[#D1D5DB] bg-white p-2">
              <img
                src={activeCompany.logo}
                alt={`${activeCompany.name} logo`}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="text-xl font-semibold text-[#111827]">{activeCompany.name}</div>
              <div className="mt-2 text-base leading-relaxed text-[#4B5563]">
                {activeCompany.description}
              </div>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-[#2563EB]">
                <span className="rounded-full bg-white px-3 py-1 font-medium text-[#1F2937]">
                  Cost: {activeCompany.cost}/10
                </span>
                <span className="rounded-full bg-white px-3 py-1 font-medium text-[#1F2937]">
                  Feature depth: {activeCompany.depth}/10
                </span>
                {activeCompany.highlight ? (
                  <span className="rounded-full bg-[#0f766e] px-3 py-1 font-medium text-white">
                    Zaudit Advantage
                  </span>
                ) : null}
              </div>
            </div>
          </div>
      </Card>
    </SectionContainer>
  );
}

