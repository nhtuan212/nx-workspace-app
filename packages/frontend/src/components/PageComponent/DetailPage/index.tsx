import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import { productAction, productByCategoryAction } from '@reducers/productSlice';
import SeoText from '@components/SeoComponent/SeoText';
import SeoHead from '@components/SeoComponent/SeoHead';
import Loading from '@components/LoadingComponent';
import ProductDetail from '@components/ProductComponent/ProductDetail';
import { useRouterCustomHook } from '@/helpers/customHook';
import { isEmpty } from 'lodash';
import EmptyPage from '@/components/EmptyPage';

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

    const { productList, productDetail } = useSelector(
        (state: AppState) => state?.product,
    );

    // Variables
    const seoData = {
        seoSlug: props?.seoData?.slug,
        seoTitle: props?.seoData?.title,
        seoDescription: props?.seoData?.description,
    };

    // Hooks
    useEffect(() => {
        // Dispatch product By Category
        dispatch(
            productByCategoryAction({
                slug: router?.asPath,
            }),
        ).then(() => {
            isEmpty(productList) &&
                dispatch(
                    productAction({
                        slug: router?.asPath,
                    }),
                );
        });

        const arr = [
            {
                id: 1,
                name: 'Áo thun',
                slug: 'smartphones',
                thumbnail: null,
                product: {
                    id: 1,
                    categoryId: 1,
                    createdAt: '2023-04-24T07:40:15.000Z',
                    updatedAt: null,
                },
            },
            {
                id: 1,
                name: 'Áo thun',
                slug: 'smartphones',
                thumbnail: null,
                product: {
                    id: 2,
                    categoryId: 1,
                    createdAt: '2023-04-24T07:40:15.000Z',
                    updatedAt: null,
                },
            },
        ];

        const mergedObject = arr.reduce((acc, cur) => {
            return {
                ...acc,
                ...cur,
            };
        }, {});

        const products = arr.reduce((acc, cur) => {
            return acc.concat(cur.product);
        }, []);

        mergedObject.product = products;

        console.log({ mergedObject });
    }, [router?.asPath]);

    return (
        <>
            {!isEmpty(productList) ? (
                <div className="py-2">
                    <ProductList title={router?.asPath} data={productList} />
                </div>
            ) : !isEmpty(productDetail) ? (
                <div className="py-2">
                    <ProductDetail data={productDetail} />
                </div>
            ) : (
                <EmptyPage />
            )}
            <SeoText data={seoData} />
            <SeoHead data={seoData} />
        </>
    );
};

export default DetailPage;
