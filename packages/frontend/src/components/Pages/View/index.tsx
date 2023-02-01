import React from 'react';
import Header from '@/components/Pages/View/Header';
import Footer from '@/components/Pages/View/Footer';

const View = ({ children }: any) => {
    return (
        <>
            <Header />
            <main id="main">{children}</main>
            <Footer />
        </>
    );
};

export default View;
