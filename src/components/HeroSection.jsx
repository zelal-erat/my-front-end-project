import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

export default function HeroSection() {
  const { translations } = useContext(SettingsContext); // translations'ı context'ten al

  return (
    <div className="flex items-center justify-center h-screen ml-[70px] ">
      <div className="w-1/2">
      <div className="flex items-center">
  <div className="border-t-2 border-[#3730A3] w-24 mr-4"></div> 
  <span className="text-lg text-[#4338CA]">{translations.heroSection?.name}</span>
</div>

        <h2 className="text-[60px] mb-5 font-bold">{translations.heroSection?.intro}</h2> {/* Dinamik intro metni */}
        <p className="text-[1.2rem] text-[#6B7280]">{translations?.heroSection?.description}</p> {/* Dinamik açıklama metni */}
        <div className="flex flex-row items-center gap-4 text-blue-500 mt-5">
  <button className="p-3 b rounded text-[#3730A3] border-2 border-[#3730A3]">
    {translations?.heroSection?.hireMe}
  </button>

  <div className="flex gap-4 text-[#3730A3]">
    {translations?.heroSection?.socials.map((social, index) => (
      <a
        key={index}
        href={social.link}
        className="flex items-center gap-2 p-2  rounded border-2 border-[#3730A3] "
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
      <img className="w-1/2" src={translations?.heroSection?.profileImage} alt="profile" />
      
      
    </div>
  );
}
