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

const data = [
  { name: 'Tally', cost: 8, depth: 9 },
  { name: 'Marg', cost: 7, depth: 8 },
  { name: 'Zoho Books', cost: 7, depth: 7 },
  { name: 'Busy', cost: 6, depth: 7 },
  { name: 'myBillBook', cost: 4, depth: 5 },
  { name: 'Giddh', cost: 5, depth: 6 },
  { name: 'ProfitBooks', cost: 3, depth: 4 },
  { name: 'Vyapar', cost: 3, depth: 3 },
  { name: 'Zaudit', cost: 4, depth: 9.5, highlight: true }
];

export default function CostVsFeature() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
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
                <XAxis type="number" dataKey="cost" name="Cost" domain={[0, 10]} tick={{ fill: '#6B7280' }} />
                <YAxis type="number" dataKey="depth" name="Feature Depth" domain={[0, 10]} tick={{ fill: '#6B7280' }} />
                <ZAxis type="number" range={[80, 160]} dataKey={() => 120} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter
                  data={data.filter(d => !d.highlight)}
                  fill="#9CA3AF"
                  shape="circle"
                />
                <Scatter
                  data={data.filter(d => d.highlight)}
                  fill="teal"
                  shape="circle"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center mt-6 text-[#374151]">
            All-in-one power — without Tally’s complexity or Zoho’s price tag.
          </div>
        </Card>
      </div>
    </section>
  );
}


