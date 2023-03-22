import React, { useEffect } from 'react';
import { buttonInterface } from '@/interface';
import classNames from 'classnames';
import IconComponent from '@components/IconComponent';

let clickTimer = 0;
const ButtonComponent = ({
    className,
    disabled = false,
    icon,
    iconClassName,
    onClick,
    type,
    text,
}: buttonInterface) => {
    // Setup ClassName
    const buttonClassName = classNames('button', className && className);

    // Functions
    const onClickButton = (e: object) => {
        if (clickTimer) clearTimeout(clickTimer);
        clickTimer = window.setTimeout(() => {
            onClick && onClick(e);
        }, 300);
    };

    // Hooks
    useEffect(() => {
        return () => clearTimeout(clickTimer);
    }, []);

    return (
        <button className={buttonClassName} type={type} disabled={disabled} onClick={onClickButton}>
            {icon && <IconComponent icon={icon} iconClassName={iconClassName} />}
            {text && <span>{text}</span>}
        </button>
    );
};

export default ButtonComponent;
