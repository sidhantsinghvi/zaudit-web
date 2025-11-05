import { motion } from 'motion/react';
import { Quote, Star, TrendingUp, Users, Zap } from 'lucide-react';
import { Card } from './ui/card';

const testimonials = [
  {
    quote: "Zaudit transformed our accounting workflow. What used to take days now happens in hours with remarkable accuracy.",
    author: "Priya Mehta",
    role: "Finance Director",
    company: "TechVentures Delhi",
    rating: 5,
  },
  {
    quote: "Finally, software that understands Indian compliance requirements. The GST automation alone has saved us countless hours.",
    author: "Vikram Singh",
    role: "Managing Partner",
    company: "Singh & Associates",
    rating: 5,
  },
  {
    quote: "The AI insights help us make better financial decisions. It's like having an expert accountant available 24/7.",
    author: "Anita Desai",
    role: "CFO",
    company: "ManufactureCo Pune",
    rating: 5,
  },
];

const stats = [
  { icon: Users, value: "150+", label: "Active Businesses" },
  { icon: TrendingUp, value: "10,000+", label: "Invoices Processed" },
  { icon: Zap, value: "95%", label: "Time Saved" },
  { icon: Star, value: "4.9/5", label: "Customer Rating" },
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
            <span className="text-sm tracking-wider text-[#008080] uppercase">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
            Trusted by forward-thinking businesses
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Join hundreds of businesses already transforming their accounting operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 border-[#E5E7EB] hover:border-[#008080]/30 rounded-2xl relative group">
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-[#008080]" />
                </div>
                
                <div className="relative z-10 space-y-6">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF9933] text-[#FF9933]" />
                    ))}
                  </div>

                  <p className="text-[#4B5563] leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="pt-6 border-t border-[#E5E7EB]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#008080] to-[#006666] flex items-center justify-center text-white flex-shrink-0">
                        <span className="text-lg">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-[#1a1a1a]">{testimonial.author}</p>
                        <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
                        <p className="text-sm text-[#6B7280]">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl border border-[#E5E7EB] hover:border-[#008080]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#008080]/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-[#008080]" />
              </div>
              <div className="text-3xl lg:text-4xl bg-gradient-to-r from-[#008080] to-[#006666] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-[#6B7280]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
