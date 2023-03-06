import React, { useEffect } from 'react';
import { buttonInterface } from '@/interface';
import SvgIcons from '../Icons/SvgIcons';
import classNames from 'classnames';

let clickTimer = 0;
const ButtonComponent = ({
    className,
    disabled = false,
    svgIconKind,
    onClick,
    type,
    text,
}: buttonInterface) => {
    // Setup ClassName
    const buttonClassname = classNames('button', className && className);

    const onClickButton = (e: object) => {
        if (clickTimer) clearTimeout(clickTimer);
        clickTimer = window.setTimeout(() => {
            onClick && onClick(e);
        }, 300);
    };

    useEffect(() => {
        return () => clearTimeout(clickTimer);
    }, []);

    return (
        <button className={buttonClassname} type={type} disabled={disabled} onClick={onClickButton}>
            {svgIconKind && (
                <span className="icon">
                    <SvgIcons kind={svgIconKind} />
                </span>
            )}
            {text && <span>{text}</span>}
        </button>
    );
};

export default ButtonComponent;
