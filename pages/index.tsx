import Head from 'next/head';
import { useEffect, useState } from 'react';
import AboutMe from '../components/HomePage/AboutMe';
import ContactMe from '../components/HomePage/ContactMe';
import Footer from '../components/HomePage/Footer';
import Header from '../components/HomePage/Header';
import ProjectHighlights from '../components/HomePage/ProjectHighlights';
import TechnicalSkills from '../components/HomePage/TechnicalSkills';

const Resume: string = require('./Assets/JoshJeffersCVPublic.pdf');

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
		icon: 'fab fa-github',
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/josh-jeffers/',
		icon: 'fab fa-linkedin',
	},
	{
		name: 'Email',
		href: 'mailto:joshjeffers600@gmail.com',
		icon: 'far fa-envelope',
	},
	{
		name: 'Resume',
		href: Resume,
		icon: 'fas fa-file-pdf',
	},
];

export default function Home() {
	const [theme, setTheme] = useState<Theme>(getDefaultTheme());

	useEffect(() => {
		document.body.classList.add(theme);
		localStorage.theme = theme;
	}, [theme]);

	function getDefaultTheme(): Theme {
		let theme: Theme = 'dark';

		if (localStorage.theme) theme = localStorage.theme;
		return theme;
	}

	const updateTheme = (newTheme: Theme): void => {
		document.body.classList.remove(theme); // Remove old theme class
		setTheme(newTheme);
	};

	const toggleTheme = (): void => {
		if (theme === 'dark') updateTheme('light');
		else updateTheme('dark');
	};

	return (
		<div>
			<Head>
				<title>Josh Jeffers</title>
				<meta name="description" content="Josh Jeffers' digital portfolio" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/logo192.png" />
				<script src="https://kit.fontawesome.com/79326f38c4.js" crossOrigin="anonymous" async />
			</Head>
			<div className="App">
				<header className="app-header">
					<Header
						toggleTheme={toggleTheme}
						sections={[
							['About Me', ''],
							['Skills', 'technical-skills'],
							['Projects', 'projects'],
							['Contact Me', 'contact-me'],
						]}
						currentTheme={theme}
					/>
				</header>
				<div className="container dark:text-gray-200 text-gray-800 pb-16">
					<AboutMe />
					<TechnicalSkills />
					<ProjectHighlights />
					<ContactMe />
				</div>
				<Footer />
			</div>
		</div>
	);
}
