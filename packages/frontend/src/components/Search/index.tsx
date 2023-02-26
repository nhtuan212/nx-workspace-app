import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '@components/Button';
import Input from '@components/Input';
import SvgIcons from '@components/Icons/SvgIcons';
import { ICON_KEY, TEXT } from '@/constants';

const Search = () => {
    const [showSearch, setShowSearch] = useState(false);

    const searchClassName = classNames(
        'absolute top-0 left-0 w-100 h-100 d-flex justify-between border-bottom align-center bg-white mx-auto animation-top',
    );
    const containerSearchClassName = classNames(
        'w-100 h-100 mw-800 d-flex align-center mx-auto px-2',
    );
    const inputSearchClassName = classNames('text-26 px-0 border-0');

    const handleOnClick = () => {
        setShowSearch(!showSearch);
    };
    return (
        <>
            <Button svgIconKind={ICON_KEY.SEARCH} onClick={handleOnClick} />
            {showSearch && (
                <div className={searchClassName}>
                    <div className={containerSearchClassName}>
                        <div className="col">
                            <Input
                                className={inputSearchClassName}
                                placeHolder={TEXT.ENTER_FIND_PRODUCT}
                            />
                        </div>
                        <div className="p-0.5 pointer" onClick={handleOnClick}>
                            <span className="icon icon--small">
                                <SvgIcons kind={ICON_KEY.CLOSE} />
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Search;
