import React, {useEffect, useState} from 'react';
import './Styles/App.scss';
import Header from './Components/HomePage/Header';
import ProjectHighlights from './Components/HomePage/ProjectHighlights';
import AboutMe from './Components/HomePage/AboutMe';
import TechnicalSkills from "./Components/HomePage/TechnicalSkills";
import ContactMe from "./Components/HomePage/ContactMe";
import Footer from "./Components/HomePage/Footer";

type Theme = 'light' | 'dark';

interface LinkItems {
  name: string;
  href: string;
  icon: string;
}

const Links: LinkItems[] = [
  {
    name: 'Github',
    href: 'https://github.com/pumbas600',
    icon: 'fab fa-github'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/josh-jeffers-657111233/',
    icon: 'fab fa-linkedin'
  },
  {
    name: 'Email',
    href: 'mailto:joshjeffers600@gmail.com',
    icon: 'far fa-envelope'
  }
];

function App() {

  const [theme, setTheme] = useState<Theme>(getDefaultTheme());

  useEffect(() => {
    document.body.classList.add(theme);
    localStorage.theme = theme;
  }, [theme])



  function getDefaultTheme(): Theme {
    let theme: Theme = 'dark';

    if (localStorage.theme)
      theme = localStorage.theme;
    return theme;
  }

  const updateTheme = (newTheme: Theme): void => {
    document.body.classList.remove(theme); // Remove old theme class
    setTheme(newTheme);
  }

  const toggleTheme = (): void => {
    if (theme === 'dark')
      updateTheme('light');
    else
      updateTheme('dark');
  }

  return (
    <div className="App">
      <header className="app-header">
        <Header
            toggleTheme={toggleTheme}
            sections={[['About Me', ''], ['Skills', 'technical-skills'], ['Projects', 'projects'], ['Contact Me', 'contact-me']]}
            currentTheme={theme}
        />
      </header>
      <div className="container dark:text-gray-200 text-gray-800 pb-16">
        <AboutMe/>
        <TechnicalSkills/>
        <ProjectHighlights/>
        <ContactMe/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
export { Links };
