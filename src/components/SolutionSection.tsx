import { motion } from 'motion/react';
import { Zap, Bot, MessageCircle, RefreshCw, Lock, CheckCircle } from 'lucide-react';
import SectionContainer from './SectionContainer';

const features = [
  {
    icon: Zap,
    title: 'Instant E-Invoice Generation',
    description: 'One-click e-invoice and e-way bill creation with automatic GST portal integration.',
  },
  {
    icon: Bot,
    title: 'Smart Reconciliation',
    description: 'AI-powered ITC matching and automatic reconciliation that eliminates manual work.',
  },
  {
    icon: MessageCircle,
    title: 'Daily Business Insights',
    description: 'WhatsApp-style summaries with key metrics, pending tasks, and actionable insights.',
  },
  {
    icon: RefreshCw,
    title: 'Seamless Import',
    description: 'Direct integration with Tally and Excel for hassle-free data migration.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Role-based access control with complete audit trails and data encryption.',
  },
];

export default function SolutionSection() {
  return (
    <SectionContainer className="bg-[#F9FAFB]">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm tracking-wider text-[#008080] uppercase">The Solution</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6 max-w-3xl mx-auto leading-tight">
            Intelligent automation built for India
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Everything you need to transform your accounting workflow, powered by AI.
          </p>
      </motion.div>

      <div className="grid gap-12 mb-20 lg:grid-cols-[1.1fr,0.9fr] items-stretch xl:gap-20">
          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 self-stretch"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-[#E5E7EB] hover:border-[#008080]/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#008080] to-[#006666] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg mb-2 text-[#1a1a1a]">{feature.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex h-full flex-col gap-8"
          >
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-[#008080] to-[#006666] rounded-2xl p-8 text-white shadow-xl flex-1">
              <h3 className="text-2xl mb-6">Transform Your Workflow</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <span className="text-white/90">Time Saved Monthly</span>
                  <span className="text-2xl">5-10 hrs</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <span className="text-white/90">Error Reduction</span>
                  <span className="text-2xl">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Compliance Rate</span>
                  <span className="text-2xl">100%</span>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-lg flex-1">
              <h3 className="text-xl mb-6 text-[#1a1a1a]">Key Benefits</h3>
              <div className="space-y-4">
                {[
                  'Real-time GST compliance monitoring',
                  'Automated invoice processing',
                  'Intelligent cash flow forecasting',
                  'Multi-user collaboration tools',
                  'Comprehensive audit trails'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#008080] flex-shrink-0" />
                    <span className="text-[#4B5563]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
      </div>
    </SectionContainer>
  );
}
