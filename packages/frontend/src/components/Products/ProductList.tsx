import React from 'react';
import { useSelector } from 'react-redux';
import { productOptionInterface } from '@/interface';
import ProductItems from './ProductItems';

const ProductList = (props: productOptionInterface) => {
    return (
        props?.data && (
            <section className="hot-products py-1 sm:py-0.5">
                <div className="container">
                    {props?.title && <p className="title text-center">{props?.title}</p>}
                    <div className="d-flex flex-wrap">
                        {props?.data.map((item: any) => (
                            <ProductItems key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </section>
        )
    );
};

export default ProductList;
