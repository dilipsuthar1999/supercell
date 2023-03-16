import JsonData from './data/website.json'
import cocData from './data/clashofclan.json'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ContentSection from './components/ContentSection'
import MainSection from './components/MainSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar logo={JsonData.logo} icons={JsonData.Icons} />
      <HeroSection data={JsonData.heroSection} apps={JsonData.AppBtn} />
      <ContentSection section="about" data={JsonData.aboutSection} url={JsonData.AppBtn} />
      <MainSection data={cocData} />
      <ContentSection section="update" data={JsonData.updateSection} url={JsonData.SocialBtn} />
      <Footer logo={JsonData.logo} appLinks={JsonData.AppBtn} socialLinks={JsonData.SocialBtn} />
    </div>
  );
}

export default App;
