import React, { useState } from 'react';
import { ICON_KEY } from '@/constants';
import Button from '../Button';
import Input from '../Input';
import SvgIcons from '../Icons/SvgIcons';
import classNames from 'classnames';
import styles from './searchStyles.module.scss';

const Search = () => {
    const searchClassName = classNames(
        styles['search-header'],
        'search-head absolute top-0 w-100 d-flex justify-between align-center border rounded-md',
    );
    const inputSearchClassName = classNames(styles['input']);

    const handleOnClick = () => {
        console.log('onclick');
    };
    return (
        <div className="search relative pointer w-100">
            <Button svgIconKind={ICON_KEY.SEARCH} onClick={handleOnClick} />
            <div className={searchClassName}>
                <div className="col">
                    <Input className={inputSearchClassName} />
                </div>
                <div className="p-0.5">
                    <span className="icon">
                        <SvgIcons kind={ICON_KEY.SEARCH} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Search;
