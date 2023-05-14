import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import ButtonComponent from '@components/ButtonComponent';
import InputComponent from '@components/InputComponent';
import { ICON, KEY_CODE, PAGE, TEXT } from '@/constants';
import { useRouterCustomHook } from '@/helpers/customHook';
import styles from '@styles/components/search.module.scss';

const SearchComponent = () => {
    // Custom Hook
    const router = useRouterCustomHook()

    // Variables
    const [showSearch, setShowSearch] = useState(false);
    const [inputFocus, setInputFocus] = useState(false);
    const [inputValue, setInputValue] = useState<any>('');

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

    // Hooks
    useEffect(() => {
        setInputValue(router?.query?.keyword);

        return () => {
            setInputValue('');
        };
    }, [router?.query]);

    return (
        <>
            <ButtonComponent
                icon={ICON.FONT.SEARCH}
                iconClassName={'text-20'}
                onClick={handleOnClick}
            />
            {showSearch && (
                <div className={styles.search}>
                    <div className={styles.search__container}>
                        <div className="flex-1">
                            <InputComponent
                                className={styles.search__input}
                                onChange={handleOnChangeInput}
                                onKeyDown={handleKeyDownInput}
                                autoFocus={inputFocus}
                                text={inputValue}
                                placeHolder={TEXT.ENTER_FIND_PRODUCT}
                            />
                        </div>
                        <div className="p-2 cursor-pointer">
                            <ButtonComponent
                                className="mr-2"
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
        </>
    );
};

export default SearchComponent;
