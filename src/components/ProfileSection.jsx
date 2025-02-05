import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

export default function ProfileSection() {
  const { translations } = useContext(SettingsContext);
  const { title, personalInfo, aboutMe } = translations?.profileSection || {};

  return (
    <div className="ml-[70px] mr-[70px] mt-[70px]">
      <h1 className="font-bold text-4xl mb-[20px]">{title}</h1>

      <div className="flex justify-between">
        {[ 
          { sectionTitle: title, content: personalInfo?.map(({ label, value }, index) => (
              <li key={index} className="flex items-center mb-2">
                <label className="font-bold mr-4 w-36">{label}:</label>
                <span>{value}</span>
              </li>
            )) 
          },
          { sectionTitle: aboutMe?.title, content: <p className="text-[#6B7280]">{aboutMe?.content}</p> }
        ].map(({ sectionTitle, content }, index) => (
          <div key={index} className={index === 0 ? "" : "w-[50%]"}>
            <h2 className="text-[#4338CA] font-medium text-xl mb-[10px]">{sectionTitle}</h2>
            {Array.isArray(content) ? <ul>{content}</ul> : content}
          </div>
        ))}
      </div>
    </div>
  );
}
