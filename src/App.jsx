
import './App.css'
import './index.css';  // veya './App.css'


import Header from './components/Header'


import SettingsContextProvider from './contexts/SettingsContext'

function App() {
  
  

  return (
    <SettingsContextProvider>
    <Header/>
    
    
    </SettingsContextProvider>
  

   
  )
}

export default App
