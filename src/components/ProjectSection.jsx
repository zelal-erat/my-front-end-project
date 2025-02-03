
import React, { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';


export default function ProjectSection() {
  const { translations } = useContext(SettingsContext);

  return (
    <div className="ml-[70px] mr-[70px] mt-[70px]">
       <h1 className="font-bold text-4xl">{translations.projectsTitle}</h1>
      {/* Workintech Projesi */}
      <div className='flex gap-[100px]'>
      <div className="w-[300px]">
        <img src={translations.workintech.workintechimg} alt="workintech" />
        <h2 className='text-[#4338CA] font-medium text-xl'>{translations.workintech.title}</h2>
        <p>{translations.workintech.description}</p>
        <div>
          {translations.workintech.technologies.map((tech, index) => (
            <button key={index}>{tech}</button>
          ))}
        </div>
        <div>
          <a href={translations.workintech.githubLink}>{translations.workintech.github}</a>
          <a href={translations.workintech.viewSiteLink}>{translations.workintech.viewSite}</a>
        </div>
      </div>

      {/* Random Jokes Projesi */}
      <div className="random-jokes">
        <img src={translations.randomJokes.random} alt="random" />
        <h2 className='text-[#4338CA] font-medium text-xl'>{translations.randomJokes.title}</h2>
        <p>{translations.randomJokes.description}</p>
        <div>
          {translations.randomJokes.technologies.map((tech, index) => (
            <button key={index}>{tech}</button>
          ))}
        </div>
        <div>
          <a href={translations.randomJokes.githubLink}>{translations.randomJokes.github}</a>
          <a href={translations.randomJokes.viewSiteLink}>{translations.randomJokes.viewSite}</a>
        </div>
      </div>

      {/* Journey Projesi */}
      <div className="journey-project">
        <img src={translations.journeyProject.journey} alt="journey"  className='w-[300px] '/>
        <h2 className='text-[#4338CA] font-medium text-xl'>{translations.journeyProject.title}</h2>
        <p>{translations.journeyProject.description}</p>
        <div>
          {translations.journeyProject.technologies.map((tech, index) => (
            <button key={index}>{tech}</button>
          ))}
        </div>
        <div>
          <a href={translations.journeyProject.githubLink}>{translations.journeyProject.github}</a>
          <a href={translations.journeyProject.viewSiteLink}>{translations.journeyProject.viewSite}</a>
        </div>
      </div>
      </div>
    </div>
  );
}
