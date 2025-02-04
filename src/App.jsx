import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProfileSection from './components/ProfileSection'
import ProjectSection from './components/ProjectSection'
import SkillsSection from './components/SkillsSection'

import SettingsContextProvider from './contexts/SettingsContext'
import { ToastContainer } from 'react-toastify'; // ToastContainer'ı import et

function App() {
  return (
    <SettingsContextProvider>
      {/* Toast mesajları için ToastContainer ekledik */}
      <ToastContainer position="top-right" autoClose={5000} />

      {/* Diğer bileşenler */}
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProfileSection />
      <ProjectSection />
      <Footer />
    </SettingsContextProvider>
  )
}

export default App
