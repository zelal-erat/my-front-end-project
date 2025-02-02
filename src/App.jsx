
import './App.css'
import './index.css';  // veya './App.css'


import Header from './components/Header'
import HeroSection from './components/HeroSection'


import SettingsContextProvider from './contexts/SettingsContext'

function App() {
  
  

  return (
    <SettingsContextProvider>
    <Header/>
    <HeroSection/>
    
    </SettingsContextProvider>
  

   
  )
}

export default App
