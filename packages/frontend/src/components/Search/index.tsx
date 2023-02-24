import React, { useState } from 'react';
import { ICON_KEY, TEXT } from '@/constants';
import Button from '../Button';
import Input from '../Input';
import SvgIcons from '../Icons/SvgIcons';
import classNames from 'classnames';

const Search = () => {
    const [showSearch, setShowSearch] = useState(false);

    const searchClassName = classNames(
        'absolute top-0 left-0 w-100 h-100 d-flex justify-between border-bottom align-center bg-white mx-auto animation-top',
    );
    const inputSearchClassName = classNames('text-26 border-0');

    const handleOnClick = () => {
        setShowSearch(!showSearch);
    };
    return (
        <>
            <Button svgIconKind={ICON_KEY.SEARCH} onClick={handleOnClick} />
            {showSearch && (
                <div className={searchClassName}>
                    <div className="w-100 mw-800 d-flex align-center mx-auto h-100">
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
