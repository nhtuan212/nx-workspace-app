import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { flashSaleProductAction, hotProducts } from '@reducers/productSlice';
import Loading from '@components/LoadingComponent';

const ProductList = dynamic(
    () => import('@components/ProductComponent/ProductList'),
    {
        loading: () => <Loading />,
        ssr: false,
    },
);

const HomePage = () => {
    const dispatch = useDispatch();

    const { hotProduct, flashSaleProduct } = useSelector<any, any>(
        state => state?.product,
    );

    // Hook
    useEffect(() => {
        dispatch(hotProducts());
        dispatch(flashSaleProductAction());
    }, []);

    return (
        <>
            <ProductList title={'Sản phẩm hot'} data={hotProduct} />
            <ProductList title={'Sản phẩm bán chạy'} data={flashSaleProduct} />
        </>
    );
};

export default HomePage;
