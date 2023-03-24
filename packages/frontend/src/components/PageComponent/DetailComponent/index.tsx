import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { productListAction } from '@reducers/productSlice';
import SeoText from '@components/SeoComponent/SeoText';
import SeoHead from '@components/SeoComponent/SeoHead';
import Loading from '@components/LoadingComponent';
import { useRouterCustomHook } from '@/helpers/customHook';

const ProductList = dynamic(
    () => import('@components/ProductComponent/ProductList'),
    {
        loading: () => <Loading />,
        ssr: false,
    },
);

const DetailComponent = (props: any) => {
    const router = useRouterCustomHook();

    // Variables
    const dataSeo = {
        resolvedUrl: props?.resolvedUrl,
        seoTitle: 'Áo thun',
        seoDescription: 'Áo thun description',
    };
    const dispatch = useDispatch();

    const { productList } = useSelector<any, any>(state => state?.product);

    // Hook
    useEffect(() => {
        console.log({ router });

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
            <SeoText data={dataSeo} />
            <SeoHead data={dataSeo} />
        </>
    );
};

export default DetailComponent;
