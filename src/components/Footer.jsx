import React, { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';


export default function Footer() {
  const { translations } = useContext(SettingsContext);

  return (
    <div className="flex justify-between items-center pr-16 pl-16 h-65 ">
      <div className="">
        <h2 className='text-4xl font-bold mb-[40px] w-[60%]'>{translations?.footer?.workTogether}</h2> {/* Dinamik olarak footer başlığı */}
        <p>
  👉 <span class="inline-block border-b border-red-800 pb-1 text-[#AF0C48]">
    {translations?.footer?.email}
  </span>
</p>

      </div>
      <div className="">
        <ul className='flex gap-3 mt-[100px]'>
          <li>{translations?.footer?.socialLinks?.blog}</li>
          <li className='text-[#00AB6B]'>{translations?.footer?.socialLinks?.github}</li>
          <li className='text-[#0077B5]' >{translations?.footer?.socialLinks?.linkedin}</li>
        </ul>
      </div>
    </div>
  );
}
