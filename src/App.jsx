
import './App.css'



import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProfileSection from './components/ProfileSection'
import ProjectSection from './components/ProjectSection'
import SkillsSection from './components/SkillsSection'

import SettingsContextProvider from './contexts/SettingsContext'

function App() {
  
  

  return (
    <SettingsContextProvider>
    <Header/>
    <HeroSection/>
    <SkillsSection/>
    <ProfileSection/>
    <ProjectSection/>
    <Footer/>
    </SettingsContextProvider>
  

   
  )
}

export default App
