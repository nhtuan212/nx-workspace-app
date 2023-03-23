import React from 'react';
import { AppStore, ReduxWrapper } from '@/redux/store';
import Header from '@components/PageComponent/ViewPage/Header';
import Footer from '@components/PageComponent/ViewPage/Footer';
import Slide from '@components/SlideComponent';

const ViewPage = ({ children }: any) => {
    return (
        <>
            <Header />
            <Slide />
            <main id="main">{children}</main>
            <Footer />
        </>
    );
};

ViewPage.getInitialProps = ReduxWrapper.getInitialPageProps(
    (store: AppStore) => async () => {
        console.log({ store });
        // await store.dispatch(getMenu());
        // return {
        // 	data: ''
        // }
    },
);

export default ViewPage;
