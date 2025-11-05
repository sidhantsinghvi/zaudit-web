import { motion } from 'motion/react';
import { Play, TrendingUp, FileCheck, PieChart } from 'lucide-react';

export default function ProductPreview() {
  return (
    <section id="demo" className="py-24 lg:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm tracking-wider text-[#008080] uppercase">Product Demo</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
            See Zaudit in action
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Experience how intelligent automation transforms your accounting workflow
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5E7EB] group cursor-pointer bg-gradient-to-br from-[#F9FAFB] to-white"
        >
          {/* Video Placeholder */}
          <div className="relative aspect-video flex items-center justify-center p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-12 gap-4 h-full p-8">
                {[...Array(36)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#008080] rounded"
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Play Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-full p-8 shadow-2xl group-hover:bg-[#008080] transition-all duration-300 border border-[#E5E7EB]">
                <Play className="w-16 h-16 text-[#008080] group-hover:text-white transition-colors fill-current" />
              </div>
            </motion.div>
            
            {/* Feature Badges */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="relative h-full w-full max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-12 left-12 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-[#E5E7EB]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#008080]/10 flex items-center justify-center">
                      <FileCheck className="w-4 h-4 text-[#008080]" />
                    </div>
                    <span className="text-sm text-[#1a1a1a]">Auto GST Filing</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-12 right-12 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-[#E5E7EB]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FF9933]/10 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-[#FF9933]" />
                    </div>
                    <span className="text-sm text-[#1a1a1a]">Real-time Analytics</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-[#E5E7EB]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#008080]/10 flex items-center justify-center">
                      <PieChart className="w-4 h-4 text-[#008080]" />
                    </div>
                    <span className="text-sm text-[#1a1a1a]">Smart Insights</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl lg:text-5xl bg-gradient-to-r from-[#008080] to-[#006666] bg-clip-text text-transparent mb-3">
              10x
            </div>
            <p className="text-[#6B7280]">Faster Processing</p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl bg-gradient-to-r from-[#008080] to-[#006666] bg-clip-text text-transparent mb-3">
              99.9%
            </div>
            <p className="text-[#6B7280]">Accuracy Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl bg-gradient-to-r from-[#008080] to-[#006666] bg-clip-text text-transparent mb-3">
              24/7
            </div>
            <p className="text-[#6B7280]">AI Assistance</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
