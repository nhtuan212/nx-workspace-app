import React, { useState } from 'react';
import classNames from 'classnames';
import ButtonComponent from '@components/ButtonComponent';
import InputComponent from '@components/InputComponent';
import IconComponent from '@components/IconComponent';
import { ICON, TEXT } from '@/constants';

const SearchComponent = () => {
    const [showSearch, setShowSearch] = useState(false);

    // Setup ClassName
    const searchClassName = classNames(
        'absolute top-0 left-0 w-100 h-100 d-flex justify-between border-bottom align-center bg-white mx-auto animation-top',
    );
    const containerSearchClassName = classNames(
        'w-100 h-100 mw-800 d-flex align-center mx-auto px-2',
    );
    const inputSearchClassName = classNames('text-26 px-0 border-0');

    // Setup Functions
    const handleOnClick = () => {
        setShowSearch(!showSearch);
    };

    return (
        <div className="search">
            <ButtonComponent
                icon={ICON.FONT.SEARCH}
                iconClassName={'text-20'}
                onClick={handleOnClick}
            />
            {showSearch && (
                <div className={searchClassName}>
                    <div className={containerSearchClassName}>
                        <div className="col">
                            <InputComponent
                                className={inputSearchClassName}
                                placeHolder={TEXT.ENTER_FIND_PRODUCT}
                            />
                        </div>
                        <div className="p-0.5 pointer" onClick={handleOnClick}>
                            <IconComponent icon={ICON.FONT.CLOSE} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchComponent;
