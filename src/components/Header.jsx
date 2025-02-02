import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";


function Header() {
  const { darkMode, toggleDarkMode, language, changeLanguage, translations } = useContext(SettingsContext);

  return (
    <header className={darkMode ? 'header dark' : 'header light'}>
      <div className="header-settings">
        {/* Dark Mode Switch */}
        <div className="toggle-container">
          <label className="switch">
            <input 
              type="checkbox" 
              checked={darkMode} 
              onChange={toggleDarkMode} 
            />
            <span className="slider"></span>
          </label>
          <span>{darkMode ? translations.lightMode : translations.darkMode}</span>
        </div>

        {/* Dil Seçimi */}
        <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
        </select>
      </div>

      {/* Header Butonları */}
      <div className="header-buttons">
        {translations.header && translations.header.header_buttons && translations.header.header_buttons.map((button) => (
          <a key={button.id} href={button.link} className="header-button">
            {button.text}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
