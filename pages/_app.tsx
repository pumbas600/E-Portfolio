import '../styles/App.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return <Component className="dark:bg-gray-800 bg-white min-h-screen" {...pageProps} />;
}
