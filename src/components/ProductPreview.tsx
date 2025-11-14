import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, FileCheck, PieChart } from 'lucide-react';

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
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5E7EB] bg-gradient-to-br from-[#F9FAFB] to-white"
        >
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/f3nDRT_V4dY?rel=0&showinfo=0"
              title="Zaudit product walkthrough"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="ml-auto bg-white/80 backdrop-blur rounded-xl px-4 py-3 shadow-lg border border-[#E5E7EB]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#008080]/10 flex items-center justify-center">
                    <FileCheck className="w-4 h-4 text-[#008080]" />
                  </div>
                  <span className="text-sm text-[#1a1a1a] font-medium">Auto GST Filing</span>
                </div>
              </motion.div>

              <div className="flex flex-wrap items-end justify-between gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/80 backdrop-blur rounded-xl px-4 py-3 shadow-lg border border-[#E5E7EB]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FF9933]/10 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-[#FF9933]" />
                    </div>
                    <span className="text-sm text-[#1a1a1a] font-medium">Real-time Analytics</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/80 backdrop-blur rounded-xl px-4 py-3 shadow-lg border border-[#E5E7EB]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#008080]/10 flex items-center justify-center">
                      <PieChart className="w-4 h-4 text-[#008080]" />
                    </div>
                    <span className="text-sm text-[#1a1a1a] font-medium">Smart Insights</span>
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
