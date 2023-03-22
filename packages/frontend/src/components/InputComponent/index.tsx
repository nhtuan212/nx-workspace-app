import React, { useState } from 'react';
import { inputInterface } from '@/interface';
import classNames from 'classnames';

const InputComponent = ({
    className,
    onChange,
    disabled,
    type,
    text,
    placeHolder,
}: inputInterface) => {
    // Setup ClassName
    const inputClassName = classNames('input', className && className);

    // Variables
    const [value, setValue] = useState(text);

    // Functions
    const onChangeInput = (e: any) => setValue(e?.target?.value);

    return (
        <input
            className={inputClassName}
            onChange={onChange || onChangeInput}
            type={type}
            value={value}
            placeholder={placeHolder}
            disabled={disabled}
        />
    );
};

export default InputComponent;
