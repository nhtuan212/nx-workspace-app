import React from 'react';
import Link from 'next/link';
import ImageComponent from '@components/ImageComponent';
import classNames from 'classnames';
import styles from './productStyles.module.scss';

const ProductItems = (props: any) => {
    // Setup ClassName
    const imageClassName = classNames(
        'd-flex align-center mb-0.5 rounded-lg',
        styles['product-image'],
    );

    return (
        <div className="product-items md:col-3 sm:col-4 col-6 p-0.5">
            <Link href="">
                <div className={imageClassName}>
                    <ImageComponent src={props?.data?.thumbnail} />
                </div>
                <p className="name">{props?.data.title}</p>
                <p className="price text-pink fw-700">{props?.data.price}</p>
            </Link>
        </div>
    );
};

export default ProductItems;
