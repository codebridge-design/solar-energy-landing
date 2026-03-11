import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import HeroSection from './components/Hero/HeroSection.jsx'
import ProblemStats from './components/ProblemStats/ProblemStats.jsx'
import HowItWorks from './components/HowItWorks/HowItWorks.jsx'
import BenefitsSection from './components/Benefits/BenefitsSection.jsx'
import TechnicalSpecs from './components/TechnicalSpecs/TechnicalSpecs.jsx'
import InstallationTimeline from './components/InstallationTimeline/InstallationTimeline.jsx'
import ROISavings from './components/ROISavings/ROISavings.jsx'
import CaseStudyResults from './components/CaseStudyResults/CaseStudyResults.jsx'
import TestimonialsSection from './components/Testimonials/TestimonialsSection.jsx'
import CTASection from './components/CTA/CTASection.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemStats />
        <HowItWorks />
        <BenefitsSection />
        <TechnicalSpecs />
        <InstallationTimeline />
        <ROISavings />
        <CaseStudyResults />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
