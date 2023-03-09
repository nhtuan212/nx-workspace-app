import React from 'react';
import { ReduxWrapper } from '@/redux/store';
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

ViewPage.getInitialProps = ReduxWrapper.getInitialPageProps(store => async () => {
    console.log({ store });
    // await store.dispatch(getMenu());
    // return {
    // 	data: 'binayu'
    // }
});

export default ViewPage;
