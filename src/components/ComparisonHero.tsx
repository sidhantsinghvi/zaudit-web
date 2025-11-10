import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function ComparisonHero() {
  return (
    <section id="comparison" className="py-24 lg:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-[#008080]/10 px-4 py-2 rounded-full border border-[#008080]/20 mb-6">
            <span className="text-sm text-[#008080] uppercase tracking-wider">Comparison</span>
          </div>

          <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
            The smartest upgrade from Tally and Zoho — powerful, simple, and built for Indian SMBs.
          </h2>
          <p className="text-xl text-[#6B7280] mb-8">
            Zaudit delivers full-suite accounting, inventory, and payroll in one cloud platform —
            combining ERP-level control with Suvit-grade automation to save hours every week.
          </p>

          <Button
            size="lg"
            className="bg-[#008080] hover:bg-[#006666] text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Try Zaudit Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}


