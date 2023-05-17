import React, { ButtonHTMLAttributes } from 'react';

const ButtonComponent: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className,
    type,
    title,
    disabled,
    ...props
}) => {
    return (
        <button
            className={className}
            type={type}
            title={title || 'button'}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default ButtonComponent;
