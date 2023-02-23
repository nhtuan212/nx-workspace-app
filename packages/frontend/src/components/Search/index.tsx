import React, { useState } from 'react';
import { ICON_KEY } from '@/constants';
import Button from '../Button';
import Input from '../Input';
import SvgIcons from '../Icons/SvgIcons';
import classNames from 'classnames';
import styles from './searchStyles.module.scss';

const index = () => {
    const [showSearch, setShowSearch] = useState(false);

    const searchClassName = classNames(
        styles['search-header'],
        'search-head absolute w-100 d-flex justify-between align-center border rounded-md translate-y',
        showSearch && styles['active'],
    );
    const inputSearchClassName = classNames(styles['input']);

    const handleOnClick = () => {
        setShowSearch(!showSearch);
    };
    return (
        <>
            <Button svgIconKind={ICON_KEY.SEARCH} onClick={handleOnClick} />
            <div className={searchClassName}>
                <div className="col">
                    <Input className={inputSearchClassName} />
                </div>
                <div className="p-0.5" onClick={handleOnClick}>
                    <span className="icon icon--small">
                        <SvgIcons kind={ICON_KEY.SEARCH} />
                    </span>
                </div>
            </div>
        </>
    );
};

export default index;
