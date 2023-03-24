import React, { useState } from 'react';
import classNames from 'classnames';
import ButtonComponent from '@components/ButtonComponent';
import InputComponent from '@components/InputComponent';
import { ICON, KEY_CODE, PAGE, TEXT } from '@/constants';
import { useRouterCustomHook } from '@/helpers/customHook';

const SearchComponent = () => {
    // Custom Hook
    const router = useRouterCustomHook();

    // Variables
    const [showSearch, setShowSearch] = useState(false);
    const [inputFocus, setInputFocus] = useState(false);
    const [inputValue, setInputValue] = useState<any>(
        router?.query?.keyword || '',
    );

    // ClassNames
    const searchClassName = classNames(
        'absolute top-0 left-0 w-100 h-100 d-flex justify-between border-bottom align-center bg-white mx-auto animation-top',
    );
    const containerSearchClassName = classNames(
        'w-100 h-100 mw-800 d-flex align-center mx-auto px-2',
    );
    const inputSearchClassName = classNames('text-26 px-0 border-0');

    // Setup Functions
    const handleOnChangeInput = (event: any) => {
        setInputValue(event.target.value);
    };
    const handleOnClick = () => {
        setShowSearch(!showSearch);
        setInputFocus(true);
    };
    const handleOnSearch = () => {
        if (!inputValue || inputValue === '')
            return (window.location.href = PAGE.HOME);

        router.push(`/${PAGE.SEARCH}?keyword=${inputValue}`);
        setShowSearch(false);
    };
    const handleKeyDownInput = (event: any) => {
        switch (event.keyCode) {
            case KEY_CODE.ENTER:
                handleOnSearch();
                break;
            case KEY_CODE.ESCAPE:
                setShowSearch(false);
                break;
            default:
                break;
        }
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
                                onChange={handleOnChangeInput}
                                onKeyDown={handleKeyDownInput}
                                autoFocus={inputFocus}
                                text={inputValue}
                                placeHolder={TEXT.ENTER_FIND_PRODUCT}
                            />
                        </div>
                        <div className="p-0.5 pointer">
                            <ButtonComponent
                                className="mr-0.5"
                                icon={ICON.FONT.SEARCH}
                                onClick={handleOnSearch}
                            />
                            <ButtonComponent
                                icon={ICON.FONT.CLOSE}
                                onClick={handleOnClick}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchComponent;
