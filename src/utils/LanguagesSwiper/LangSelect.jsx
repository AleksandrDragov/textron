import React, { useState, useEffect } from 'react';
import './LangSelect.less';
import Icon from 'utils/Icon';

export default function LanguagesSwiper() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'eng';
  });

  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setDropdownOpen(false);
  };

  const languages = [
    { code: 'eng', icon: 'us-lang' },
    { code: 'cz', icon: 'cz-lang' }
  ];

  const selectedLanguageLabel = languages.find(lang => lang.code === selectedLanguage)?.label;
  const selectedLanguageIcon = languages.find(lang => lang.code === selectedLanguage)?.icon;

  return (
    <div className="languages">
      <button className="languages-btn" onClick={toggleDropdown}>
        <Icon id={selectedLanguageIcon} width={30} height={30} />
        {selectedLanguageLabel}
      </button>
      {dropdownOpen && (
        <div className="languages-dropdown">
          {languages.map(lang => (
            <button
              key={lang.code}
              className="languages-option"
              onClick={() => selectLanguage(lang.code)}
            >
              <Icon id={lang.icon} width={30} height={30} />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

