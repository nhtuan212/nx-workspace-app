import React from 'react';
import { iconInterface } from '@/interface';

const IconComponent = ({
    icon,
    iconClassName = 'text-16',
    direction,
}: iconInterface) => {
    // Functions
    const renderIcon = () => {
        let result = `fi ${icon}`;

        if (direction) {
            result = `${result}${direction && `-${direction}`}`;
        }

        return `${result} ${iconClassName}`;
    };

    return <i className={renderIcon()}></i>;
};

export default IconComponent;
