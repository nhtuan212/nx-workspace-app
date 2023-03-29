import React, { useEffect } from 'react';
import Link from 'next/link';
import { subMenuInterface } from '@/interface';
import classNames from 'classnames';
import styles from './menuStyles.module.scss';
import isEmpty from 'lodash/isEmpty';

const subMenu = ({ data }: subMenuInterface) => {
    // ClassNames
    const subMenuClassname = classNames(
        'absolute w-100 top-100 left-0 p-1 bg-white animation-top border-top',
        styles['sub-menu']
    );

    // Hook
    useEffect(() => {
        // console.log(type == 'collapse', type);
    }, []);

    const renderSubMenu = () => {
        return (
            <div className={subMenuClassname}>
                <div className="container">
                    {!isEmpty(data) &&
                        data.map((item: any) => (
                            <div className="col-auto p-0.5" key={item?.id}>
                                <Link href={item?.slug}>{item?.name}</Link>
                            </div>
                        ))}
                </div>
            </div>
        );
    };

    return <>{renderSubMenu()}</>;
};

export default subMenu;
