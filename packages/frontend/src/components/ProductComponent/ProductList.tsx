import React from 'react';
import { productListInterface } from '@/interface';
import ProductItems from './ProductItems';
import EmptyPage from '../EmptyPage';
import { isEmpty } from 'lodash';
import { LIMIT } from '@/constants';

const ProductList = (props: productListInterface) => {
    return (
        props?.data && (
            <section className="sm:py-4 py-2">
                <div className="container">
                    {props?.title && (
                        <p className="title text-center">{props?.title}</p>
                    )}
                    {!isEmpty(props?.data) ? (
                        <div className="flex flex-wrap">
                            {props?.data.map((item: any, index: number) => {
                                return (
                                    <ProductItems
                                        key={item?.id}
                                        data={item}
                                        priority={index < LIMIT.PRIORITY_IMAGE}
                                    />
                                );
                            })}
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
