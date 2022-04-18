import React from 'react';
import './Styles/App.scss';
import Header from './Components/HomePage/Header';
import ProjectHighlights from './Components/HomePage/ProjectHighlights';
import AboutMe from './Components/HomePage/AboutMe';

export interface LanguageIcons {
  [key: string]: string
}

export const LanguageIconLinks:LanguageIcons = require("./Assets/TechnologyIcons.json");

/**
 * TODO:
 *  - Dark theme changer using toggle button
 *  - Sticky header
 *  - Github requests for weekly commit data (https://medium.com/@quynh.totuan/how-to-get-the-current-week-in-javascript-9e64d45a9a08)
 *  - Github project descriptions
 *  - Language percent graph for projects
 */

function App() {
  const setTheme = (theme: 'light' | 'dark'): void => {
    if (localStorage.theme)
      document.body.classList.remove(localStorage.theme);

    document.body.classList.add(theme);
    localStorage.theme = theme;
  }

  const toggleTheme = (): void => {
    if (localStorage.theme === 'dark')
      setTheme('light');
    else 
      setTheme('dark');
  }
  
  if (localStorage.theme)
    setTheme(localStorage.theme);
  else 
    setTheme('dark');

  return (
    <div className="App">
      <header className="app-header">
        <Header toggleTheme={toggleTheme}/>
      </header>
      <div className="centred-body">
        <AboutMe/>
        <ProjectHighlights/>
      </div>
    </div>
  );
}

export default App;
