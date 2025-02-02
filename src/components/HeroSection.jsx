



import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

export default function HeroSection() {
  const { translations } = useContext(SettingsContext); // translations'ı context'ten al

  return (
    <div className="hero-section">
      <div className="hero-about">
        <h2>{translations.heroSection.intro}</h2> {/* Dinamik intro metni */}
        <p>{translations.heroSection.description}</p> {/* Dinamik açıklama metni */}
        <img src={translations.heroSection.profileImage} alt="profile" />
        
        <div className="socials">
          {translations.heroSection.socials.map((social, index) => (
            <a key={index} href={social.link} className={`button ${social.platform.toLowerCase()}`}>
              <img src={social.icon} alt={social.platform} /> {social.platform}
            </a>
          ))}
          <button className="social-button">{translations.heroSection.hireMe}</button> {/* Dinamik "Hire me" butonu */}
        </div>
      </div>
      
      
    </div>
  );
}
