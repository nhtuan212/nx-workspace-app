import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMenu } from '@reducers/menuSlice';
import Header from '@components/Pages/View/Header';
import Footer from '@components/Pages/View/Footer';

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

View.getInitialProps = async ctx => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const json = await res.json();
    return { data: json.stargazers_count };
};

export default View;
