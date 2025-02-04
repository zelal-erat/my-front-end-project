
import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

export default function ProfileSection() {
  const { translations } = useContext(SettingsContext); // translations'ı context'ten al

  return (
    <div className="ml-[70px] mr-[70px] mt-[70px] ">
      <h1 className="font-bold text-4xl">{translations?.profileSection?.title}</h1> {/* Dinamik profil başlığı */}

      <div className="flex gap-8">

      <div className="">
        <h2 className=" text-[#4338CA] font-medium text-xl">{translations?.profileSection?.title}</h2> {/* Dinamik profil başlığı */}
        <ul>
          {translations?.profileSection?.personalInfo.map((info, index) => (
            <li key={index}>
              {info.label}: {info.value}
            </li>
          ))}
        </ul>
      </div>

      <div className="about-me">
        <h2 className=" text-[#4338CA] font-medium text-xl"> {translations?.profileSection?.aboutMe?.title}</h2> {/* Dinamik Hakkımda başlığı */}
        <p>{translations?.profileSection?.aboutMe.content}</p> {/* Dinamik Hakkımda içeriği */}
      </div>
      </div>
    </div>
  );
}