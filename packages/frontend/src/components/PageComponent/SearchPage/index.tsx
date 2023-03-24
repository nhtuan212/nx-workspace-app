import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import SeoText from '@components/SeoComponent/SeoText';
import SeoHead from '@components/SeoComponent/SeoHead';
import Loading from '@components/LoadingComponent';
import { productSearchAction } from '@reducers/productSlice';
import { useRouterCustomHook } from '@/helpers/customHook';

const ProductList = dynamic(
    () => import('@components/ProductComponent/ProductList'),
    {
        loading: () => <Loading />,
        ssr: false,
    },
);

const SearchComponent = (props: any) => {
    const router = useRouterCustomHook();
    // Variables
    const dataSeo = {
        resolvedUrl: props?.resolvedUrl,
        seoTitle: 'Kết quả tìm kiếm',
        seoDescription: 'Kết quả tìm kiếm description',
    };
    const dispatch = useDispatch();

    const { productSearch } = useSelector<any, any>(state => state?.product);

    // Hook
    useEffect(() => {
        dispatch(
            productSearchAction({
                keyword: router?.query?.keyword,
            }),
        );
    }, [router?.query]);

    return (
        <div className="py-1">
            <div className="container">
                {productSearch && (
                    <div className="py-2">
                        <ProductList
                            title={'Kết quả tìm kiếm'}
                            data={productSearch}
                        />
                    </div>
                )}
                <SeoText data={dataSeo} />
                <SeoHead data={dataSeo} />
            </div>
        </div>
    );
};

export default SearchComponent;
