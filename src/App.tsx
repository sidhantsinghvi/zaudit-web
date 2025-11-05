import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ProductPreview from './components/ProductPreview';
import SignupForm from './components/SignupForm';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden antialiased">
      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Product Preview */}
      <ProductPreview />

      {/* Social Proof */}
      <SocialProof />

      {/* Signup Form */}
      <SignupForm />

      {/* Footer */}
      <Footer />

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}
