import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

function Header() {
  const { darkMode, toggleDarkMode, language, changeLanguage, translations } = useContext(SettingsContext);

  return (
    <header className={`${darkMode ? 'header dark' : 'header light'} mr-[80px]`}>
      <div className="header-settings flex gap-5 justify-end mt-2.5">
        {/* Dark Mode Switch */}
        <div className="toggle-container flex items-center gap-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="sr-only peer"
            />
            <span className="w-10 h-6 bg-[#3730A3] peer-checked:bg-[#3730A3] rounded-full peer-checked:after:translate-x-4 peer-checked:after:bg-yellow-400 transition-all"></span>
            <span className="w-4 h-4 bg-yellow-400 rounded-full absolute left-1 top-1 transition-all peer-checked:left-5"></span>
          </label>
          <span>{darkMode ? translations.lightMode : translations.darkMode}</span>
        </div>

        {/* Vertical Line */}
        <div className="border-l-2 border-gray-300 mx-4 h-2.5rem" />

        {/* Language Selector as Buttons */}
        <div className="language-switcher flex items-center gap-4">
          {language === "en" ? (
            <button 
              onClick={() => changeLanguage("tr")} 
              className="text-[#6B7280] hover:underline">
              {translations.switchToTurkish}
            </button>
          ) : (
            <button 
              onClick={() => changeLanguage("en")} 
              className="text-[#6B7280] hover:underline">
              {translations.switchToEnglish}
            </button>
          )}
        </div>
      </div>

      <div className="flex justify-between ml-[70px]">
        <div className="w-[55px]">
          <img src={translations?.header?.logo} alt="logo" />
        </div>

        {/* Header Buttons */}
        <div className="flex gap-7 justify-end mt-5 text-gray-500">
          {translations.header &&
            translations.header.header_buttons &&
            translations.header.header_buttons.map((button) => (
              <a key={button.id} href={button.link} className="p-[0.2rem] px-[0.8rem]">
                {button.text}
              </a>
            ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
