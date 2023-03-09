import React from 'react';
import { AppStore, ReduxWrapper } from '@/redux/store';
import Header from '@components/Pages/ViewPage/Header';
import Footer from '@components/Pages/ViewPage/Footer';

const ViewPage = ({ children }: any) => {
    return (
        <>
            <Header />
            <main id="main">{children}</main>
            <Footer />
        </>
    );
};

ViewPage.getInitialProps = ReduxWrapper.getInitialPageProps((store: AppStore) => async () => {
    console.log({ store });
    // await store.dispatch(getMenu());
    // return {
    // 	data: 'binayu'
    // }
});

export default ViewPage;
