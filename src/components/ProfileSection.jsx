
import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

export default function ProfileSection() {
  const { translations } = useContext(SettingsContext); // translations'ı context'ten al

  return (
    <div className="profile-section">
      <h1>{translations.profileSection.title}</h1> {/* Dinamik profil başlığı */}

      <div className="profile">
        <h2>{translations.profileSection.title}</h2> {/* Dinamik profil başlığı */}
        <ul>
          {translations.profileSection.personalInfo.map((info, index) => (
            <li key={index}>
              {info.label}: {info.value}
            </li>
          ))}
        </ul>
      </div>

      <div className="about-me">
        <h2>{translations.profileSection.aboutMe.title}</h2> {/* Dinamik Hakkımda başlığı */}
        <p>{translations.profileSection.aboutMe.content}</p> {/* Dinamik Hakkımda içeriği */}
      </div>
    </div>
  );
}