import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import View from '@/components/Pages/View';
import 'public/assets/css/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <View {...pageProps}>
                <Component />
            </View>
        </Provider>
    );
}
