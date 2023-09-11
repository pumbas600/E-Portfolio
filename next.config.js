/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.shields.io/**',
			},
			{
				protocol: 'https',
				hostname: 'github.pumbas.net',
			},
		],
	},
};

module.exports = nextConfig;
