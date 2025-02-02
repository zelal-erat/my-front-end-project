
import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

export default function SkillsSection() {
  const { translations } = useContext(SettingsContext); // Context'ten gerekli verileri çek
  const skills = translations.skillsSection.skills; // doğru yerden al

  return (
    <div className="skillsSection">
      <h1>{translations.skillsSection.title}</h1>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="box">
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

