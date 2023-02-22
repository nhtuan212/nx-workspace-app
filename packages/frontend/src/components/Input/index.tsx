import React, { useState } from 'react';
import { inputInterface } from '@/interface';
import classNames from 'classnames';

const index = ({ className, onChange, disabled, type, text }: inputInterface) => {
    const inputClassname = classNames('input', className && className);

    const [value, setValue] = useState(text);

    const onChangeInput = (e: any) => setValue(e?.target?.value);

    return (
        <input
            className={inputClassname}
            onChange={onChangeInput}
            value={value}
            type={type}
            disabled={disabled}
        />
    );
};

export default index;
