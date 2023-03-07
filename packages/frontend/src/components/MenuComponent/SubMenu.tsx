import React from 'react';
import { subMenuInterface } from '@/interface';

const subMenu = ({ showSubMenu }: subMenuInterface) => {
    const renderSubMenu = () => {
        if (showSubMenu) {
            return <div className="absolute w-100 h-100 top-100 left-0 bg-white">binayu</div>;
        }
    };

    return <div>{renderSubMenu()}</div>;
};

export default subMenu;
