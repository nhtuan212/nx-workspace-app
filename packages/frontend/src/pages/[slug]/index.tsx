import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import SeoText from '@components/Seo/SeoText';
import SeoHead from '@components/Seo/SeoHead';
// import ProductList from '@components/Products/ProductList';
// import { useDispatch, useSelector } from 'react-redux';
// import { listProductAction } from '@/redux/reducers/productSlice';
const ProductList = dynamic(() => import('@components/Products/ProductList'));

const Slug = ({ posts }: any) => {
    const dataSeo = {
        seoTitle: 'Áo thun',
        seoKeywords: 'Áo thun keywords',
        seoDescription: 'Áo thun description',
    };
    // const dispatch = useDispatch();

    // const { listProduct } = useSelector<any, any>(state => state?.product);

    // Hook
    useEffect(() => {
        // dispatch(listProductAction());
    }, []);

    return (
        <>
            <div className="py-2">
                <ProductList title={'Áo thun'} data={posts?.products} />
            </div>
            <SeoText data={dataSeo} />
            <SeoHead data={dataSeo} />
        </>
    );
};

export async function getStaticPaths() {
    return {
        paths: [{ params: { slug: '/ao-thun' } }],
        fallback: true,
    };
}

export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/products?limit=10');
    const posts = await res.json();
    return {
        // Passed to the page component as props
        props: { posts },
    };
}

export default Slug;
