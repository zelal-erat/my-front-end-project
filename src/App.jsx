
import './App.css'
import './index.css';  // veya './App.css'


import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProfileSection from './components/ProfileSection'

import SkillsSection from './components/SkillsSection'

import SettingsContextProvider from './contexts/SettingsContext'

function App() {
  
  

  return (
    <SettingsContextProvider>
    <Header/>
    <HeroSection/>
    <SkillsSection/>
    <ProfileSection/>
    
    </SettingsContextProvider>
  

   
  )
}

export default App
