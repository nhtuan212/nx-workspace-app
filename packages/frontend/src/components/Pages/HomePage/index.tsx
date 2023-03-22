import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { flashSaleProductAction, hotProducts } from '@reducers/productSlice';
import Slide from '@components/SlideComponent';
import Loading from '@/components/LoadingComponent';

const ProductList = dynamic(() => import('@components/Products/ProductList'), {
    loading: () => <Loading />,
    ssr: false,
});

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
            <Slide />
            <ProductList title={'Sản phẩm hot'} data={hotProduct} />
            <ProductList title={'Sản phẩm bán chạy'} data={flashSaleProduct} />
        </>
    );
};

export default HomePage;
