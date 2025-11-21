import SectionContainer from './SectionContainer';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const painPointData = [
  { name: 'Too slow / complex', value: 4 },
  { name: 'Limited reporting', value: 4 },
  { name: 'GST headaches', value: 3 },
  { name: 'Customization + inventory', value: 4 },
  { name: 'Outdated automation', value: 3 },
];

const toolUsageData = [
  { name: 'Tally (desktop)', value: 14 },
  { name: 'Flash / legacy', value: 1 },
  { name: 'SAP / large ERP', value: 1 },
  { name: 'Mostly spreadsheets', value: 3 },
];

const benefitsData = [
  { name: 'Faster reporting', value: 8 },
  { name: 'Less manual entry', value: 6 },
  { name: 'Automation / integrations', value: 4 },
  { name: 'AI assistance', value: 2 },
];

const COLORS = ['#0f766e', '#0ea5e9', '#16a34a', '#f97316', '#6366f1'];

function InsightCard({
  title,
  data,
  highlight,
}: {
  title: string;
  data: { name: string; value: number }[];
  highlight?: string;
}) {
  return (
    <div className="bg-white border border-[#E5E7EB] shadow-lg rounded-3xl p-6 flex flex-col gap-4">
      <div className="text-sm uppercase tracking-[0.4em] text-[#008080]/80">{title}</div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius="80%"
              innerRadius={38}
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => `${value}`}
              contentStyle={{ background: '#ffffff', borderRadius: 12 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {highlight ? (
        <p className="text-sm text-[#4B5563]">{highlight}</p>
      ) : (
        <ul className="text-sm text-[#4B5563] space-y-2">
          {data.map(entry => (
            <li key={entry.name} className="flex justify-between">
              <span>{entry.name}</span>
              <span className="font-semibold text-[#0f766e]">{entry.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function InsightsSection() {
  return (
    <SectionContainer className="bg-gradient-to-b from-white to-[#F7FAFC]">
      <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-[#008080]/70">What we heard</p>
        <h2 className="text-4xl font-semibold text-[#111827]">
          Why automation matters right now
        </h2>
        <p className="text-lg text-[#4B5563]">
          This is what business owners told us they need: faster reports, less manual entry,
          and automation built for Indian GST workflows.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <InsightCard
          title="Primary frustrations"
          data={painPointData}
          highlight="Speed, reporting, GST, and manual data are the top blockers."
        />
        <InsightCard
          title="Current tools"
          data={toolUsageData}
          highlight="Tally still powers the majority of books, with a handful on older or manual processes."
        />
        <InsightCard
          title="What would save time"
          data={benefitsData}
          highlight="Faster reporting and automated entry with integrations are in highest demand."
        />
      </div>
    </SectionContainer>
  );
}
