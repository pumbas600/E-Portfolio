import '../styles/App.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="dark:bg-gray-800 bg-white min-h-screen">
			<Component {...pageProps} />
		</div>
	);
}
