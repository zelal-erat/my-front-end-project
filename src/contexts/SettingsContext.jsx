import React, { createContext, useState, useEffect } from 'react';
import data from '../../data.json';

export const SettingsContext = createContext();

const SettingsContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState(data.en); // Başlangıç dilini 'en' olarak ayarladık

  useEffect(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    const storedLanguage = localStorage.getItem('language');

    // Tarayıcı dilini al
    const browserLanguage = navigator.language.split('-')[0]; // "en-US" -> "en"

    // Eğer daha önce dil seçimi yapılmadıysa, tarayıcı dilini kullan
    const languageToUse = storedLanguage || (browserLanguage in data ? browserLanguage : 'en');

    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode);
      document.body.classList.toggle('dark', storedDarkMode);
    }
    

    setLanguage(languageToUse);
    setTranslations(data[languageToUse]);
    localStorage.setItem('language', languageToUse); // Kullanıcı dilini kaydet
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  
    // Dark Mode için body'ye sınıf ekle
    document.body.classList.toggle('dark', newDarkMode);
  };
  
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setTranslations(data[lang]);
    localStorage.setItem('language', lang);
  };

  
  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        language,
        changeLanguage,
        translations,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
