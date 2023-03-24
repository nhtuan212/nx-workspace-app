import React from 'react';
import classNames from 'classnames';
import styles from './loadingStyles.module.scss';

const Loading = () => {
    // ClassNames
    const loadingClassName = classNames(
        'h-100vh d-flex justify-center align-center',
        styles['loading'],
    );

    return (
        <div className={loadingClassName}>
            <div className={styles['lds-ellipsis']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;
