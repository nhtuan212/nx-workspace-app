import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ReduxWrapper } from '@/redux/store';
import ViewPage from '@components/PageComponent/ViewPage';
import '../../src/styles/globals.scss';

const MyApp = ({ Component, ...rest }: AppProps) => {
    const { store, props } = ReduxWrapper.useWrappedStore(rest);
    const { pageProps } = props;

    return (
        <Provider store={store}>
            <ViewPage>
                <Component {...pageProps} />
            </ViewPage>
        </Provider>
    );
};

export default MyApp;

// MyApp.getInitialProps = async () => {
//     const res = await fetch(`${ConfigApi.menu.menuApi}`).then(res => res.json());
//     return {
//         pageProps: { menuData: res },
//     };
// };

// MyApp.getInitialProps = ReduxWrapper.getInitialPageProps(
//     () => async (ctx: any) => {
//         // Handle SSR from ViewPage
//         const nextProps = ViewPage.getInitialProps
//             ? await ViewPage.getInitialProps(ctx)
//             : {};

//         // Dispatch from Server
// 		return { nextProps };
//     },
// );
