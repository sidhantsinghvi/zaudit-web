import { motion } from 'motion/react';
import { Cloud, Users, Bot, Smile, Wallet } from 'lucide-react';
import { Card } from './ui/card';

const reasons = [
  { icon: Cloud, text: 'Cloud-native, no installation — log in from anywhere, no backups needed' },
  { icon: Users, text: 'Real-time collaboration — accountants and teams can work together live' },
  { icon: Bot, text: 'AI-assisted automation — detects errors and fills repetitive data' },
  { icon: Smile, text: 'Simpler UI — no codes, vouchers, or jargon-heavy screens' },
  { icon: Wallet, text: 'Transparent pricing — one plan, everything included' },
];

export default function WhySwitch() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl mb-4">Why 21st-century businesses are moving from Tally to Zaudit</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="p-6 h-full bg-white border-2 border-[#E5E7EB] rounded-2xl hover:shadow-lg hover:border-[#008080]/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#008080]/10 flex items-center justify-center flex-shrink-0">
                    <r.icon className="w-6 h-6 text-[#008080]" />
                  </div>
                  <p className="text-[#374151] leading-relaxed">{r.text}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


