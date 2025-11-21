import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Logo from './Logo';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#F0FFFE]/30 to-white px-3 sm:px-6 lg:px-12 pt-6 pb-24 lg:pt-10 lg:pb-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-[#008080]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-[#FF9933]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[88rem] relative z-10">
        <div className="flex justify-center mb-10">
          <Logo width={260} height={120} />
        </div>

        <div className="grid items-center justify-items-center gap-12 lg:grid-cols-2 xl:gap-18">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 text-center max-w-3xl w-full mx-auto"
          >
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
                <span className="block">“Current systems aren’t working.”</span>
                <span className="block bg-gradient-to-r from-[#008080] to-[#006666] bg-clip-text text-transparent">
                  We heard it from business owners across India.
                </span>
              </h1>
              
              <p className="text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
                Many told us their current tools are too slow or complex, reporting is limited,
                and GST compliance is a headache. We’re building Zaudit with them — not for them.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center mx-auto">
              <Button 
                size="lg"
                className="bg-[#008080] hover:bg-[#006666] text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the waitlist
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-xl border-2 border-[#E5E7EB] hover:border-[#008080] hover:bg-[#008080]/5 transition-all"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-6 border-t border-[#E5E7EB] max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FF9933]" />
                <span className="text-sm text-[#4B5563]">Built with Indian business owners</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#008080]" />
                <span className="text-sm text-[#4B5563]">Bank-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#FF9933]" />
                <span className="text-sm text-[#4B5563]">Focused on simplicity</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center w-full max-w-[640px] justify-self-center lg:justify-self-end lg:ml-12 xl:ml-16"
          >
            <div className="relative w-full">
              {/* Main dashboard image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5E7EB] bg-white p-4 sm:p-6">
                <ImageWithFallback
                  src="/logos/image.png"
                  alt="Zaudit dashboard preview"
                  className="w-full h-full object-contain rounded-2xl bg-white"
                />
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-3 sm:-left-4 top-1/4 bg-white rounded-xl shadow-xl p-4 border border-[#E5E7EB] max-w-[220px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#008080] to-[#006666] flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Processing Speed</p>
                    <p className="text-sm text-[#1a1a1a]">10x Faster</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -right-3 sm:-right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4 border border-[#E5E7EB] max-w-[220px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF9933] to-[#E67E22] flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Accuracy Rate</p>
                    <p className="text-sm text-[#1a1a1a]">99.9%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
