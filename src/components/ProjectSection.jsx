
import React, { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';


export default function ProjectSection() {
  const { translations } = useContext(SettingsContext);

  return (
    <div className="ml-[70px] mr-[70px] mt-[70px] mb-[20px]">
       <h1 className="font-bold text-4xl">{translations.projectsTitle}</h1>
      {/* Workintech Projesi */}
      <div className='flex gap-[100px]'>
      <div className="">
        <img src={translations?.workintech?.workintechimg} alt="workintech" />
        <h2 className='text-[#4338CA] font-medium text-2xl my-2.5'>{translations?.workintech?.title}</h2>
        <p className='text-[#6B7280]'>{translations?.workintech?.description}</p>
        <div>
          {translations?.workintech?.technologies.map((tech, index) => (
            <button className=' rounded-[4px] py-[6px] px-[18px] text-[#3730A3] border-2 border-solid border-[#3730A3] mr-2.5 mt-2' key={index}>{tech}</button>
          ))}
        </div>
        <div className='flex justify-between mt-2.5 text-[#3730A3] '>
          <a className='border-b' href={translations?.workintech?.githubLink}>{translations?.workintech?.github}</a>
          <a className='border-b' href={translations?.workintech?.viewSiteLink}>{translations?.workintech?.viewSite}</a>
        </div>
      </div>

      {/* Random Jokes Projesi */}
      <div className="random-jokes">
        <img src={translations?.randomJokes?.random} alt="random" />
        <h2 className='text-[#4338CA] font-medium text-2xl my-2.5'>{translations?.randomJokes?.title}</h2>
        <p className='text-[#6B7280]' >{translations?.randomJokes?.description}</p>
        <div >
          {translations?.randomJokes?.technologies.map((tech, index) => (
            <button className='rounded-[4px] py-[6px] px-[18px] text-[#3730A3] border-2 border-solid border-[#3730A3] mr-2.5 mt-2' key={index}>{tech}</button>
          ))}
        </div>
        <div className='flex justify-between mt-2.5 text-[#3730A3] '>
          <a className='border-b' href={translations?.randomJokes?.githubLink}>{translations?.randomJokes?.github}</a>
          <a className='border-b' href={translations?.randomJokes?.viewSiteLink}>{translations?.randomJokes?.viewSite}</a>
        </div>
      </div>

      {/* Journey Projesi */}
      <div className="journey-project">
        <img src={translations?.journeyProject?.journey} alt="journey"  className='w-[300px] '/>
        <h2 className='text-[#4338CA] font-medium text-2xl my-2.5'>{translations?.journeyProject?.title}</h2>
        <p className='text-[#6B7280]' >{translations?.journeyProject?.description}</p>
        <div>
          {translations?.journeyProject?.technologies.map((tech, index) => (
            <button  className='rounded-[4px] py-[6px] px-[18px] text-[#3730A3] border-2 border-solid border-[#3730A3] mr-2.5 mt-2' key={index}>{tech}</button>
          ))}
        </div>
        <div className='flex justify-between mt-2.5 text-[#3730A3] '>
          <a  className='border-b' href={translations?.journeyProject?.githubLink}>{translations?.journeyProject?.github}</a>
          <a  className='border-b' href={translations?.journeyProject?.viewSiteLink}>{translations?.journeyProject?.viewSite}</a>
        </div>
      </div>
      </div>
    </div>
  );
}
