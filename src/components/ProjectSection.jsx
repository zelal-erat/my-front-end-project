
import React, { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';


export default function ProjectSection() {
  const { translations } = useContext(SettingsContext);

  return (
    <div className="projects">
       <h1 className="section-title">{translations.projectsTitle}</h1>
      {/* Workintech Projesi */}
      <div className="workintech-project">
        <img src="" alt="" />
        <h2>{translations.workintech.title}</h2>
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
        <img src="" alt="" />
        <h2>{translations.randomJokes.title}</h2>
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
        <img src="" alt="" />
        <h2>{translations.journeyProject.title}</h2>
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
  );
}
