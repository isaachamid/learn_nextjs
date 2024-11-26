import {ReactElement, ReactNode} from 'react';
import {NextPage} from 'next';
import {AppProps} from 'next/app';

function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
