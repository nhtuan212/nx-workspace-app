import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '@components/Pages/View/Header';
import Footer from '@components/Pages/View/Footer';
import { getMenu } from '@reducers/menuSlice';

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
