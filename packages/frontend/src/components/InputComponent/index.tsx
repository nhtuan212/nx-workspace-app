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
    const inputClassname = classNames('input', className && className);

    const [value, setValue] = useState(text);

    const onChangeInput = (e: any) => setValue(e?.target?.value);

    return (
        <input
            className={inputClassname}
            onChange={onChange || onChangeInput}
            type={type}
            value={value}
            placeholder={placeHolder}
            disabled={disabled}
        />
    );
};

export default InputComponent;
