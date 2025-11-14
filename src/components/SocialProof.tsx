import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { Card } from './ui/card';

const voices = [
  {
    quote: 'Too slow/complex',
    author: 'Business Owner',
    role: 'Manufacturing',
    company: 'Jaipur',
  },
  {
    quote: 'Limited reporting',
    author: 'Business Owner',
    role: 'Retail/Trading',
    company: 'Bangalore, Karnataka',
  },
  {
    quote: 'Poor GST compliance',
    author: 'Business Owner',
    role: 'Manufacturing',
    company: 'Jaipur',
  },
  {
    quote: 'Difficult customization',
    author: 'Business Owner',
    role: 'Retail/Trading',
    company: 'Bengaluru',
  },
  {
    quote: 'Inventory management',
    author: 'Business Owner',
    role: 'Manufacturing',
    company: 'Bangalore',
  },
  {
    quote: "Doesn't have flexibility as per unique requirements of our industry",
    author: 'Business Owner',
    role: 'Manufacturing',
    company: 'Nagaur',
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-white">
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
          <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
            Voices from business owners
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Not a table, not a chart — just what people told us about their current systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {voices.map((v, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 border-[#E5E7EB] hover:border-[#008080]/30 rounded-2xl relative group">
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-[#008080]" />
                </div>
                
                <div className="relative z-10 space-y-6">
                  <p className="text-[#4B5563] leading-relaxed">
                    "{v.quote}"
                  </p>
                  
                  <div className="pt-6 border-t border-[#E5E7EB]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#008080] to-[#006666] flex items-center justify-center text-white flex-shrink-0">
                        <span className="text-lg">
                          {v.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-[#1a1a1a]">{v.author}</p>
                        <p className="text-sm text-[#6B7280]">{v.role}</p>
                        <p className="text-sm text-[#6B7280]">{v.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
