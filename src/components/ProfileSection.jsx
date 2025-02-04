
import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

export default function ProfileSection() {
  const { translations } = useContext(SettingsContext); // translations'ı context'ten al

  return (
    <div className="ml-[70px] mr-[70px] mt-[70px] ">
      <h1 className="font-bold text-4xl mb-[20px]">{translations?.profileSection?.title}</h1> {/* Dinamik profil başlığı */}

      <div className="flex justify-between">

      <div className="">
        <h2 className=" text-[#4338CA] font-medium text-xl mb-[10px]">{translations?.profileSection?.title}</h2> {/* Dinamik profil başlığı */}
        <ul>
  {translations?.profileSection?.personalInfo.map((info, index) => (
    <li key={index} className="flex items-center mb-2">
      <label className="font-bold mr-4 w-36">{info.label}:</label>  {/* Sabit genişlik */}
      <span>{info.value}</span>
    </li>
  ))}
</ul>

      </div>

      <div className="w-[50%]">
        <h2 className=" text-[#4338CA] font-medium text-xl mb-[10px]"> {translations?.profileSection?.aboutMe?.title}</h2> {/* Dinamik Hakkımda başlığı */}
        <p className="text-[#6B7280]" >{translations?.profileSection?.aboutMe.content}</p> {/* Dinamik Hakkımda içeriği */}
      </div>
      </div>
    </div>
  );
}