import { motion } from 'motion/react';
import { FileText, AlertCircle, Clock } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Too slow or complex',
    description:
      'Owners told us current tools feel heavy and slow, so teams fall back to spreadsheets and WhatsApp — very frequently.',
  },
  {
    icon: FileText,
    title: 'Limited reporting & visibility',
    description:
      'Fast reports are hard. People spend time on manual data entry instead of getting insights to run the business.',
  },
  {
    icon: AlertCircle,
    title: 'GST headaches',
    description:
      'Compliance is stressful. Many rely on their CA to handle filings, with manual reconciliation and constant follow-ups.',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm tracking-wider text-[#008080] uppercase">What we heard</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6 max-w-3xl mx-auto leading-tight">
            Business owners are unhappy with current systems
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Across industries and cities, most use Tally today and still rely on
            spreadsheets/WhatsApp. The top pain points: speed and complexity, limited reporting, and
            GST compliance that takes too much manual effort.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white p-8 rounded-2xl border border-[#E5E7EB] hover:border-[#008080]/30 hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#008080]/0 to-[#008080]/0 group-hover:from-[#008080]/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] flex items-center justify-center mb-6 group-hover:from-[#008080]/10 group-hover:to-[#008080]/5 transition-all duration-300">
                    <problem.icon className="w-7 h-7 text-[#008080]" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl mb-3 text-[#1a1a1a]">{problem.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
