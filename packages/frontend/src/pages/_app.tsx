import 'public/assets/css/globals.css';
import View from '@/components/Pages/View';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <View {...pageProps}>
            <Component />
        </View>
    );
}
