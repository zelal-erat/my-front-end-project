import React, { createContext, useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { toast } from 'react-toastify'; // react-toastify'den toast fonksiyonunu import et
import 'react-toastify/dist/ReactToastify.css'; // Stil dosyasını import et

export const SettingsContext = createContext(); 

const SettingsContextProvider = ({ children }) => { 
  const [darkMode, setDarkMode] = useState(false); // darkMode adında bir state oluşturuyoruz. Başlangıçta "false" (koyu mod kapalı).
  const [language, setLanguage] = useState('en'); // language adında bir state oluşturuyoruz. Başlangıçta dil "en" (İngilizce).
  const [translations, setTranslations] = useState({}); // translations adında bir state oluşturuyoruz. Tüm çeviriler burada depolanacak.
  const [loading, setLoading] = useState(true); // Veri yükleme durumu

  useEffect(() => { 
    const storedDarkMode = JSON.parse(localStorage.getItem('darkMode')); // localStorage'den 'darkMode' değerini alıyoruz. Eğer varsa, JSON formatından object'e çeviriyoruz.
    const storedLanguage = localStorage.getItem('language'); // localStorage'den 'language' değerini alıyoruz. Dil ayarını kontrol ediyoruz.
    const browserLanguage = navigator.language.split('-')[0]; // Kullanıcının tarayıcı dilini alıyoruz. (Örneğin, "en-US" dilinden "en" dilini alıyoruz)
    const languageToUse = storedLanguage || (browserLanguage in translations ? browserLanguage : 'en'); // Eğer localStorage'de bir dil varsa, onu kullanıyoruz. Yoksa tarayıcı dilini kontrol ediyoruz ve mevcutsa onu seçiyoruz. Eğer dil verisi mevcut değilse, varsayılan olarak "en" (İngilizce) seçiyoruz.

    if (storedDarkMode !== null) { // Eğer 'darkMode' verisi localStorage'den alınmışsa, uygulamaya yansıtıyoruz.
      setDarkMode(storedDarkMode); // darkMode state'ini güncelliyoruz.
      document.body.classList.toggle('dark', storedDarkMode); // Eğer koyu mod açıksa, body elementine 'dark' sınıfını ekliyoruz.
    }

    // Axios ile veri çekme işlemi
    axios.get('/data.json') // Axios ile '/data.json' dosyasından çevirileri alıyoruz. 
      .then(response => { 
        console.log('Veri geldi:', response.data); // Çekilen veriyi konsola yazdırıyoruz.
        setTranslations(response.data); // Çekilen çevirileri translations state'ine kaydediyoruz.
        setLoading(false); // Yükleniyor durumunu false yapıyoruz (veri geldi, artık yükleniyor değil).
        setLanguage(languageToUse); // Yukarıda belirlediğimiz dil değerini state'e kaydediyoruz.
        localStorage.setItem('language', languageToUse); // Kullanıcının dil tercihini localStorage'de saklıyoruz.
      })
      .catch(error => { 
        console.error('Veri çekme hatası:', error); // Hata varsa, konsola hata mesajı yazdırıyoruz.
        setLoading(false); // Yükleniyor durumunu false yapıyoruz (hata olsa bile).
      });
  }, []); // useEffect'in bağımlılık dizisi boş olduğu için, sadece component ilk kez render olduğunda çalışır.

  const toggleDarkMode = () => { // Dark mode'u değiştiren fonksiyon.
    const newDarkMode = !darkMode; // Mevcut darkMode değerini tersine çeviriyoruz.
    setDarkMode(newDarkMode); // DarkMode state'ini güncelliyoruz.
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode)); // Yeni darkMode değerini localStorage'e kaydediyoruz.
    document.body.classList.toggle('dark', newDarkMode); // Yeni darkMode değerine göre body elementine 'dark' sınıfını ekliyor veya çıkarıyoruz.
  };

  const changeLanguage = (lang) => { // Dil değiştirilen fonksiyon.
    console.log("Dil değiştirildi:", lang); // Konsola dil değişimi bilgisini yazdırıyoruz.
    if (translations[lang]) { // Eğer seçilen dil translations içinde varsa, dil değiştiriyoruz.
      setLanguage(lang); // Dil state'ini güncelliyoruz.
      localStorage.setItem('language', lang); // Yeni dili localStorage'e kaydediyoruz.
      toast.success(`Dil başarıyla değiştirildi: ${lang === 'en' ? 'English' : 'Türkçe'}`); // Dil başarıyla değiştiğinde, react-toastify ile bilgilendirme mesajı gösteriyoruz.
    } else { 
      console.error(`Dil ${lang} mevcut değil veya veri yüklenmedi!`); // Eğer seçilen dil mevcut değilse veya veri yüklenmemişse, hata mesajı gösteriyoruz.
    }
  };

  return ( 
    // Context provider'ı döndürüyoruz, burada sağlayıcıları tanımlıyoruz.
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
      {/* Alt bileşenler burada context değerlerine erişebilir */}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;  
// SettingsContextProvider'ı dışa aktarıyoruz ki başka yerlerden import edilebilsin.
