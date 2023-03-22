import React from 'react';
import { iconInterface } from '@/interface';

const IconComponent = ({ icon, iconClassName, direction = '' }: iconInterface) => {
    return (
        <i
            className={`fi ${icon}${direction && `-${direction}`} ${iconClassName || 'text-16'}`}
        ></i>
    );
};

export default IconComponent;
