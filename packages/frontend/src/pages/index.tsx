import React from 'react';
import HomePage from '@components/PageComponent/HomePage';
import SeoText from '@components/SeoComponent/SeoText';
import SeoHead from '@components/SeoComponent/SeoHead';

export default function Home(props: any) {
    // Variables
    const dataSeo = {
        resolvedUrl: props?.resolvedUrl,
        seoTitle: 'Create Next App',
        seoDescription: 'Create Next App description',
    };
    return (
        <>
            <SeoText data={dataSeo} />
            <SeoHead data={dataSeo} />
            <HomePage />
        </>
    );
}

export async function getServerSideProps({ resolvedUrl }: any) {
    return {
        props: {
            resolvedUrl,
        },
    };
}
