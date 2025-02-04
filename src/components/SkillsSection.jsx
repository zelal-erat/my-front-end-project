
import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

export default function SkillsSection() {
  const { translations } = useContext(SettingsContext); // Context'ten gerekli verileri çek
  const skills = translations?.skillsSection?.skills; // doğru yerden al

  return (
    <div className="flex flex-col ml-[70px] mr-[70px]">
      <h1 className="text-4xl font-bold" >{translations?.skillsSection?.title}</h1>
      <div className="gap-8 flex">
        {skills?.map((skill, index) => (
          <div key={index} className="box ">
            <h2 className="text-xl text-[#4338CA] font-medium mt-[10px] mb-[10px] " >{skill.title}</h2>
            <p className="w-[350px] text-[#6B7280]" >{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

