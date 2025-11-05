import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/button';
import { ArrowUp, ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [400, 500], [0, 1]);

  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Floating Button */}
      <motion.div
        style={{ opacity }}
        className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
      >
        <Button
          size="lg"
          className="w-full bg-gradient-to-r from-[#008080] to-[#006666] hover:from-[#006666] hover:to-[#005555] text-white shadow-2xl text-lg py-6 rounded-2xl group"
          onClick={scrollToSignup}
        >
          Get Early Access
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>

      {/* Desktop Floating Buttons */}
      <motion.div
        style={{ opacity }}
        className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-3"
      >
        <Button
          size="icon"
          className="bg-white hover:bg-[#F9FAFB] text-[#008080] shadow-xl rounded-full w-14 h-14 border border-[#E5E7EB] hover:border-[#008080] transition-all"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      </motion.div>
    </>
  );
}
