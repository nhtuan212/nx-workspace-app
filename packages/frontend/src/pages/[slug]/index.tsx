import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { productListAction } from '@reducers/productSlice';
import SeoText from '@components/SeoComponent/SeoText';
import SeoHead from '@components/SeoComponent/SeoHead';
import Loading from '@components/LoadingComponent';

const ProductList = dynamic(
    () => import('@components/ProductComponent/ProductList'),
    {
        loading: () => <Loading />,
        ssr: false,
    },
);

const Slug = ({ posts }: any) => {
    // Variables
    const dataSeo = {
        seoTitle: 'Áo thun',
        seoKeywords: 'Áo thun keywords',
        seoDescription: 'Áo thun description',
    };
    const dispatch = useDispatch();

    const { productList } = useSelector<any, any>(state => state?.product);

    // Hook
    useEffect(() => {
        dispatch(productListAction());
    }, []);

    return (
        <>
            {productList && (
                <div className="py-2">
                    <ProductList title={'Áo thun'} data={productList} />
                </div>
            )}
            <SeoText data={dataSeo} />
            <SeoHead data={dataSeo} />
        </>
    );
};

// export async function getStaticPaths() {
//     return {
//         paths: [{ params: { slug: '/ao-thun' } }],
//         fallback: true,
//     };
// }

// export async function getStaticProps() {
//     const res = await fetch('https://dummyjson.com/products?limit=10');
//     const posts = await res.json();
//     return {
//         // Passed to the page component as props
//         props: { posts },
//     };
// }

export default Slug;
