import React from 'react';
import type { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';
import { Provider } from 'react-redux';
import { AppStore, ReduxWrapper } from '@/redux/store';
// import { getMenuAction } from '@reducers/menuSlice';
import ViewPage from '@components/PageComponent/ViewPage';
import 'public/assets/css/globals.css';

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const MyApp = ({ Component, ...rest }: AppProps) => {
    const { store, props } = ReduxWrapper.useWrappedStore(rest);
    const { pageProps, ViewPageProps } = props;

    return (
        <Provider store={store}>
            <style jsx global>{`
                html {
                    font-family: ${roboto.style.fontFamily};
                }
            `}</style>
            <ViewPage {...ViewPageProps}>
                <Component {...pageProps} />
            </ViewPage>
        </Provider>
    );
};

MyApp.getInitialProps = ReduxWrapper.getInitialPageProps(
    (store: AppStore) => async (ctx: any) => {
        console.log({ store, ctx });

        // // Handle SSR from ViewPage
        // const ViewPageProps = ViewPage.getInitialProps
        //     ? await ViewPage.getInitialProps(ctx)
        //     : {};
        // Dispatch from Server
        // await store.dispatch(getMenuAction());
        // return { ViewPageProps };
    },
);

export default MyApp;
