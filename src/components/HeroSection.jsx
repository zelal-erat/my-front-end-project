import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

export default function HeroSection() {
  const { translations } = useContext(SettingsContext); // translations'ı context'ten al

  return (
    <div className="flex items-center justify-center h-screen ml-[70px] ">
      <div className="w-1/2">
        <h2 className="text-[60px] mb-5 font-bold">{translations.heroSection.intro}</h2> {/* Dinamik intro metni */}
        <p className="text-[1.2rem]" >{translations.heroSection.description}</p> {/* Dinamik açıklama metni */}
        <div className="flex flex-row items-center gap-4 text-blue-500">
  <button className="flex items-center p-3 bg-blue-500  rounded hover:bg-blue-500">
    {translations.heroSection.hireMe}
  </button>

  <div className="flex gap-4">
    {translations.heroSection.socials.map((social, index) => (
      <a
        key={index}
        href={social.link}
        className="flex items-center gap-2 p-2  rounded hover:bg-blue-500"
      >
        <img
          src={social.icon}
          alt={social.platform}
          className="w-6 h-6" // İkon boyutlarını ayarlıyoruz
        />
        <span className="text-sm font-medium">{social.platform}</span> {/* Platform ismi */}
      </a>
    ))}
  </div>
</div>

      </div>
      <img className="w-1/2" src={translations.heroSection.profileImage} alt="profile" />
      
      
    </div>
  );
}
