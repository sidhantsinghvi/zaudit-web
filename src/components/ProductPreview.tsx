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
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5E7EB] bg-black"
        >
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube-nocookie.com/embed/f3nDRT_V4dY?rel=0&modestbranding=1&controls=0&showinfo=0&iv_load_policy=3&color=white"
              title="Zaudit product walkthrough"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
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
