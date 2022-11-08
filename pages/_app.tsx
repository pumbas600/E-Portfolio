import type { AppProps } from 'next/app';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/App.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="dark:bg-gray-800 bg-white min-h-screen">
			<Component {...pageProps} />
		</div>
	);
}
