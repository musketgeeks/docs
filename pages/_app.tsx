import { AppProps } from 'next/app';

import '~/styles/global.scss';
import 'nextra-theme-docs/style.css';

export default function Nextra({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
