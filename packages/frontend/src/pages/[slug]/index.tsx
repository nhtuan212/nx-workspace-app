import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouterCustomHook } from '@helpers/customHook';
// import ProductList from '@components/Products/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { listProductAction } from '@/redux/reducers/productSlice';
const ProductList = dynamic(() => import('@components/Products/ProductList'), { ssr: false });

const Slug = ({ posts }: any) => {
    // const dispatch = useDispatch();
    const router = useRouterCustomHook();

    const { listProduct } = useSelector<any, any>(state => state?.product);

    // Hook
    useEffect(() => {
        console.log({ posts: posts, router });

        // dispatch(listProductAction());
    }, []);

    return (
        <div className="py-2">
            <ProductList title={'Áo thun'} data={posts?.products} />
        </div>
    );
};

export async function getStaticPaths() {
    return {
        paths: [{ params: { slug: '/ao-thun' } }],
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const res = await fetch('https://dummyjson.com/products?limit=100');
    const posts = await res.json();

    return {
        // Passed to the page component as props
        props: { posts },
    };
}

export default Slug;
