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

const automationData = [
  { name: 'Tally', automation: 2, timeSaved: 2 },
  { name: 'Busy', automation: 3, timeSaved: 3 },
  { name: 'Marg', automation: 3, timeSaved: 3 },
  { name: 'Zoho Books', automation: 5, timeSaved: 5 },
  { name: 'myBillBook', automation: 4, timeSaved: 4 },
  { name: 'Suvit', automation: 8, timeSaved: 7 },
  { name: 'ClearTax', automation: 8, timeSaved: 7 },
  { name: 'Zaudit', automation: 9.5, timeSaved: 9.5, highlight: true }
];

export default function AutomationProductivity() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
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
                <XAxis type="number" dataKey="automation" name="Automation" domain={[0, 10]} tick={{ fill: '#6B7280' }} />
                <YAxis type="number" dataKey="timeSaved" name="Time Saved" domain={[0, 10]} tick={{ fill: '#6B7280' }} />
                <ZAxis type="number" range={[80, 160]} dataKey={() => 120} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter
                  data={automationData.filter(d => !d.highlight)}
                  fill="#9CA3AF"
                  shape="circle"
                />
                <Scatter
                  data={automationData.filter(d => d.highlight)}
                  fill="teal"
                  shape="circle"
                />
              </ScatterChart>
            </ResponsiveContainer>
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
      </div>
    </section>
  );
}


