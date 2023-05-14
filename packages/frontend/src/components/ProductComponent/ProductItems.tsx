import React from 'react';
import Link from 'next/link';
import ImageComponent from '@components/ImageComponent';
import styles from '@styles/components/product.module.scss';

const ProductItems = (props: any) => {
    return (
        <div className={styles.product}>
            <Link href={`/${props?.data?.slug}`}>
				<div className={styles.product__image}>
                    <ImageComponent
                        src={props?.data?.thumbnail}
                        priority={props?.priority}
                    />
                </div>
                <p>{props?.data.name}</p>
				<p className={styles.product__price}>{props?.data.price}</p>
            </Link>
        </div>
    );
};

export default ProductItems;
