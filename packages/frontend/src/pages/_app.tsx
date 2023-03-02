import type { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import View from '@/components/Pages/View';
import 'public/assets/css/globals.css';

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <style jsx global>{`
                html {
                    font-family: ${roboto.style.fontFamily};
                }
            `}</style>
            <View {...pageProps}>
                <Component {...pageProps} />
            </View>
        </Provider>
    );
}
