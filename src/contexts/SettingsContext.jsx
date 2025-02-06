import React, { createContext, useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

export const SettingsContext = createContext(); 

const SettingsContextProvider = ({ children }) => { 
  const [darkMode, setDarkMode] = useState(false); // darkMode state
  const [language, setLanguage] = useState('en'); 
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Tarayıcıdaki renk tercihini almak
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // LocalStorage'den değer alalım, varsa darkMode bilgisi ile tercih edelim
    const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    const storedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.split('-')[0];
    const languageToUse = storedLanguage || (browserLanguage in translations ? browserLanguage : 'en');

    const initialDarkMode = storedDarkMode !== null ? storedDarkMode : prefersDarkMode; // Eğer localStorage'den yoksa tarayıcı tercihini kullan
    setDarkMode(initialDarkMode);
    if (initialDarkMode) {
      document.body.classList.add('dark');
    }

    axios.get('/data.json')
      .then(response => {
        setTranslations(response.data);
        setLoading(false);
        setLanguage(languageToUse);
        localStorage.setItem('language', languageToUse);
      })
      .catch(error => {
        setLoading(false);
      });

  }, []); // Bu useEffect sadece ilk renderda çalışacak.

  useEffect(() => {
    // Dark mode değiştiğinde body class'ını güncelle
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]); // darkMode state'i değiştiğinde çalışır.

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('language', lang);
      toast.success(`Dil başarıyla değiştirildi: ${lang === 'en' ? 'English' : 'Türkçe'}`);
    } else {
      console.error(`Dil ${lang} mevcut değil veya veri yüklenmedi!`);
    }
  };

  return (
    <SettingsContext.Provider 
      value={{
        darkMode,
        toggleDarkMode,
        language,
        changeLanguage,
        translations: translations[language] || {}, 
        loading,
      }} 
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
