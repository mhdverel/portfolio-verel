import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Certification from './components/Certification'
import Testimonial from './components/Testimonial'
import CTAHireMe from './components/CTAHireMe'

function App() {
  return (
    <div className="min-h-screen bg-notion-bg">
      <Navbar />
      <div className="notion-page">
        <HeroSection />
        <AboutMe />
        <TechStack />
        <Projects />
        <WorkExperience />
        <Education />
        <Certification />
        <Testimonial />
        <CTAHireMe />
      </div>
    </div>
  )
}

export default App
