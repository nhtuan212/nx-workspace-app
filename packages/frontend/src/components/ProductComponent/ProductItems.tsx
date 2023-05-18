import React from 'react';
import Link from 'next/link';
import ImageComponent from '@components/ImageComponent';
import { moneyFormat } from '@/utils';
import { PRICE_UNIT } from '@/constants';

import styles from '@styles/components/product.module.scss';

const ProductItems = (props: any) => {
    return (
        <div className={styles.product__item}>
            <Link href={`/${props?.data?.slug}`}>
                <div className={styles.product__item__image}>
                    <ImageComponent
                        src={props?.data?.thumbnail}
                        priority={props?.priority}
                        alt={props?.data.name}
                    />
                </div>
                <p>{props?.data.name}</p>
                <p className={styles.product__item__price}>
                    {moneyFormat(props?.data.price, PRICE_UNIT)}
                </p>
            </Link>
        </div>
    );
};

export default ProductItems;
