import { motion } from 'motion/react';
import SectionContainer from './SectionContainer';

export default function CompetitiveOverview() {
  return (
    <SectionContainer
      className="bg-gradient-to-b from-[#F9FAFB] to-white"
      innerClassName="max-w-4xl lg:max-w-5xl"
    >
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl mb-4 leading-tight">
            Where Zaudit stands among India’s accounting software leaders (2025)
          </h3>
      </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-[#4B5563] text-lg leading-relaxed"
        >
          <p>
            The Indian accounting-software market is shifting from legacy desktop tools to smart, cloud-based automation.
          </p>
          <p>
            Traditional leaders like Tally, Busy, and Marg remain powerful but depend heavily on manual workflows and local installations.
          </p>
          <p>
            Cloud tools like Zoho Books, ProfitBooks, and myBillBook simplify invoicing but often require multiple add-ons or higher-tier subscriptions for advanced features.
          </p>
          <p>
            Automation-centric tools like Suvit and ClearTax streamline compliance, yet depend on external systems for complete bookkeeping.
          </p>
          <p className="text-[#1a1a1a]">
            Zaudit bridges these gaps — offering the power of an ERP, the speed of AI automation, and the simplicity of a modern SaaS experience.
          </p>
      </motion.div>
    </SectionContainer>
  );
}

