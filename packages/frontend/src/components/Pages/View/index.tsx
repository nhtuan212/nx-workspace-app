import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '@/components/Pages/View/Header';
import Footer from '@/components/Pages/View/Footer';
import { getMenu } from '@/redux/reducers/menuReducer';

const View = ({ children }: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMenu());
    }, []);

    return (
        <>
            <Header />
            <main id="main">{children}</main>
            <Footer />
        </>
    );
};

export default View;
