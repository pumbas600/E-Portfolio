import React from 'react';
import './Styles/App.scss';
import Header from './Components/Header';
import Projects from './Components/Projects';

export interface LanguageIcons {
  [key: string]: string
}

export const LanguageIconLinks:LanguageIcons = require("./Assets/LanguageIcons.json");

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

function App() {
  var currentTheme: Theme;

  const setTheme = (theme: Theme): void => {
    if (currentTheme !== undefined) {
      document.body.classList.remove(currentTheme);
    }
    document.body.classList.add(theme);
    currentTheme = theme;
  }

  const toggleTheme = (): void => {
    if (currentTheme === Theme.Dark)
      setTheme(Theme.Light);
    else 
      setTheme(Theme.Dark);
  }

  setTheme(Theme.Dark);

  return (
    <div className="App">
      <header className="App-header">
        <Header toggleTheme={toggleTheme} />
        <Projects />
      </header>
    </div>
  );
}

export default App;
