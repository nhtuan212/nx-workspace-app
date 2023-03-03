import type { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import View from '@/components/Pages/View';
import Loading from '@components/Loading';
import 'public/assets/css/globals.css';

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
});

type TProps = AppProps & {
    viewProps: {};
};

export default function App({ Component, pageProps, viewProps }: TProps) {
    return (
        <Provider store={store}>
            <style jsx global>{`
                html {
                    font-family: ${roboto.style.fontFamily};
                }
            `}</style>
            <View {...viewProps}>
                <Component {...pageProps} />
            </View>
        </Provider>
    );
}

App.getInitialProps = async (context: any) => {
    const viewProps = View.getInitialProps ? await View.getInitialProps(context) : {};
    return { viewProps };
};
