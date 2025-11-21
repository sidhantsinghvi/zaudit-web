import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ProductPreview from './components/ProductPreview';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ComparisonHero from './components/ComparisonHero';
import CompetitiveOverview from './components/CompetitiveOverview';
import CostVsFeature from './components/CostVsFeature';
import AutomationProductivity from './components/AutomationProductivity';
import WhySwitch from './components/WhySwitch';
import InsightsSection from './components/InsightsSection';

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

      {/* Comparison Page Sections */}
      <ComparisonHero />
      <InsightsSection />
      <CompetitiveOverview />
      <CostVsFeature />
      <AutomationProductivity />
      <WhySwitch />

      {/* Signup Form */}
      <SignupForm />

      {/* Footer */}
      <Footer />

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}
