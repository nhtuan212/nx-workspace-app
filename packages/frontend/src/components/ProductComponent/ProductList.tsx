import React from 'react';
import { productListInterface } from '@/interface';
import ProductItems from './ProductItems';
import EmptyPage from '../EmptyPage';
import { isEmpty } from 'lodash';

const ProductList = (props: productListInterface) => {
    return (
        props?.data && (
            <section className="hot-products py-1 sm:py-0.5">
                <div className="container">
                    {props?.title && (
                        <p className="title text-center">{props?.title}</p>
                    )}
                    {!isEmpty(props?.data) ? (
                        <div className="d-flex flex-wrap">
                            {props?.data.map(
                                (item: any, id: string | number) => (
                                    <ProductItems key={id} data={item} />
                                )
                            )}
                        </div>
                    ) : (
                        <EmptyPage />
                    )}
                </div>
            </section>
        )
    );
};

export default ProductList;
