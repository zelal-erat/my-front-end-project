import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

function Header() {
  const { darkMode, toggleDarkMode, language, changeLanguage, translations } = useContext(SettingsContext);

  return (
    <header className="{darkMode ? 'header dark' : 'header light'} mr-[80px] ">
      <div className="header-settings flex gap-5 justify-end mt-2.5 ">
        {/* Dark Mode Switch */}
        <div className="toggle-container">
          <label className="switch">
            <input 
              type="checkbox" 
              checked={darkMode} 
              onChange={toggleDarkMode} 
              className="mr-px"
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

      {/* Header Butonları */}<div className="flex gap-7 justify-end mt-5 text-gray-500">
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
