import React, { useEffect, useState } from 'react';
import ButtonComponent from '@components/ButtonComponent';
import InputComponent from '@components/InputComponent';
import IconComponent from '@components/IconComponent';
import { ICON, KEY_CODE, PAGE, TEXT } from '@/constants';
import { useRouterCustomHook } from '@/helpers/customHook';
import styles from '@styles/components/search.module.scss';

const SearchComponent = () => {
    // Custom Hook
    const router = useRouterCustomHook();

    // Variables
    const [showSearch, setShowSearch] = useState(false);
    const [inputFocus, setInputFocus] = useState(false);
    const [inputValue, setInputValue] = useState<
        string | number | string[] | undefined
    >('');

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
        router?.query?.keyword && setInputValue(router?.query?.keyword);
    }, [router?.query?.keyword]);

    return (
        <>
            <ButtonComponent onClick={handleOnClick}>
                <IconComponent
                    icon={ICON.FONT.SEARCH}
                    iconClassName="text-20"
                />
            </ButtonComponent>
            {showSearch && (
                <div className={styles.search}>
                    <div className={styles.search__container}>
                        <div className="flex-1">
                            <InputComponent
                                className={styles.search__input}
                                onChange={handleOnChangeInput}
                                onKeyDown={handleKeyDownInput}
                                autoFocus={inputFocus}
                                value={inputValue}
                                placeholder={TEXT.ENTER_FIND_PRODUCT}
                            />
                        </div>
                        <div className="p-2 cursor-pointer">
                            <ButtonComponent onClick={handleOnSearch}>
                                <IconComponent
                                    icon={ICON.FONT.SEARCH}
                                    iconClassName="mr-2"
                                />
                            </ButtonComponent>
                            <ButtonComponent onClick={handleOnClick}>
                                <IconComponent icon={ICON.FONT.CLOSE} />
                            </ButtonComponent>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SearchComponent;
