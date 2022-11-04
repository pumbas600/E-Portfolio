const Resume: string = require('./assets/JoshJeffersCVPublic.pdf');

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

export default Links;
