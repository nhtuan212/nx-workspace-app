import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { productListAction } from '@reducers/productSlice';
import SeoText from '@components/SeoComponent/SeoText';
import SeoHead from '@components/SeoComponent/SeoHead';
import Loading from '@components/LoadingComponent';
import { useRouterCustomHook } from '@/helpers/customHook';
import { AppState } from '@/redux/store';

const ProductList = dynamic(
    () => import('@components/ProductComponent/ProductList'),
    {
        loading: () => <Loading />,
        ssr: false,
    },
);

const DetailPage = (props: any) => {
    const router = useRouterCustomHook();
    const dispatch = useDispatch();

    const { productList } = useSelector((state: AppState) => state?.product);

    // Variables
    const seoData = {
        seoSlug: props?.seoData?.slug,
        seoTitle: props?.seoData?.title,
        seoDescription: props?.seoData?.description,
    };

    // Hook
    useEffect(() => {
        // Dispatch ProductList
        dispatch(
            productListAction({
                slug: router?.asPath,
            }),
        );
    }, [router?.asPath]);

    return (
        <>
            {productList && (
                <div className="py-2">
                    <ProductList title={router?.asPath} data={productList} />
                </div>
            )}
            <SeoText data={seoData} />
            <SeoHead data={seoData} />
        </>
    );
};

export default DetailPage;
