import React, { InputHTMLAttributes } from 'react';

const InputComponent: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
    className,
    disabled,
    type,
    value,
    placeholder,
    ...props
}) => {
    return (
        <input
            className={className}
            type={type}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            {...props}
        />
    );
};

export default InputComponent;
