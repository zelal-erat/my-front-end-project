import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // react-toastify'den toast fonksiyonunu import et
import 'react-toastify/dist/ReactToastify.css'; // Stil dosyasını import et

export const SettingsContext = createContext();

const SettingsContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true); // Veri yükleme durumu

  useEffect(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    const storedLanguage = localStorage.getItem('language');

    const browserLanguage = navigator.language.split('-')[0];
    const languageToUse = storedLanguage || (browserLanguage in translations ? browserLanguage : 'en');

    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode);
      document.body.classList.toggle('dark', storedDarkMode);
    }

    // Axios ile veri çekme işlemi
    axios.get('/data.json') // Burada doğru URL'yi sağla
      .then(response => {
        console.log('Veri geldi:', response.data);
        setTranslations(response.data); // Tüm çevirileri yükleyelim
        setLoading(false); // Veri yüklendi
        setLanguage(languageToUse); // Yüklenen dil verisini set et
        localStorage.setItem('language', languageToUse); // Kullanıcı dilini kaydet
      })
      .catch(error => {
        console.error('Veri çekme hatası:', error);
        setLoading(false);
         // Hata mesajı
      });

  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    document.body.classList.toggle('dark', newDarkMode);
  };

  const changeLanguage = (lang) => {
    console.log("Dil değiştirildi:", lang);
    
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('language', lang);

      // Dil değiştiğinde toast mesajı göster
      toast.success(`Dil başarıyla değiştirildi: ${lang === 'en' ? 'English' : 'Türkçe'}`); // Dil değişti toast mesajı
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
        translations: translations[language] || {}, // Sadece mevcut dilin çevirisini döndür
        loading, // Yükleniyor durumu
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
