import React, { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';


export default function Footer() {
  const { translations } = useContext(SettingsContext);

  return (
    <div className="foot-section">
      <div className="bg-red-500 text-red">
        <h2>{translations.footer.workTogether}</h2> {/* Dinamik olarak footer başlığı */}
        <p>{translations.footer.email}</p> {/* Dinamik olarak e-posta */}
      </div>
      <div className="footer-social-links">
        <ul>
          <li>{translations.footer.socialLinks.blog}</li>
          <li>{translations.footer.socialLinks.github}</li>
          <li>{translations.footer.socialLinks.linkedin}</li>
        </ul>
      </div>
    </div>
  );
}
