import React, { useState } from 'react';
import { inputInterface } from '@/interface';
import classNames from 'classnames';
import styles from '@styles/components/input.module.scss';

const InputComponent = ({
    className,
    onChange,
    onKeyDown,
    autoFocus,
    disabled,
    type,
    text,
    placeHolder,
}: inputInterface) => {
    // ClassNames
	const inputClassName = classNames(styles.input, className && className);

    // Variables
    const [InputValue, setInputValue] = useState('');

    // Functions
    const onChangeInput = (e: any) => setInputValue(e?.target?.value);

    return (
        <input
			className={inputClassName}
            onChange={onChange || onChangeInput}
            onKeyDown={onKeyDown}
            autoFocus={autoFocus}
            type={type}
            value={text || InputValue}
            placeholder={placeHolder}
            disabled={disabled}
        />
    );
};

export default InputComponent;
