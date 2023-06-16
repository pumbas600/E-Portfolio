'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import AboutMe from '../components/HomePage/AboutMe';
import ContactMe from '../components/HomePage/ContactMe';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjectHighlights from '../components/HomePage/ProjectHighlights';
import TechnicalSkills from '../components/HomePage/TechnicalSkills';

export type Theme = 'light' | 'dark';
const LocalStorageThemeKey = 'pumbas.net.theme';

export default function Home() {
	const [theme, setTheme] = useState<Theme>('dark');

	useEffect(() => {
		const storedTheme = localStorage.getItem(LocalStorageThemeKey);
		if (storedTheme !== null) {
			updateTheme(storedTheme as Theme);
		}
	}, []);

	function updateTheme(newTheme: Theme) {
		document.body.classList.remove(theme); // Remove old theme class
		setTheme(newTheme);
		document.body.classList.add(newTheme);
		localStorage.setItem(LocalStorageThemeKey, newTheme);
	}

	function toggleTheme() {
		if (theme === 'dark') updateTheme('light');
		else updateTheme('dark');
	}

	return (
		<div>
			<Head>
				<title>Josh Jeffers</title>
				<meta name="description" content="Josh Jeffers' digital portfolio" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/logo192.png" />
			</Head>
			<header>
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
	);
}
