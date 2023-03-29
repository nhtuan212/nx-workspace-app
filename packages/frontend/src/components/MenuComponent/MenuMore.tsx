import React, { useState } from 'react';
import { menuMoreInterface } from '@/interface';
import SubMenu from './SubMenu';
import { ICON } from '@/constants';
import IconComponent from '../IconComponent';

const MenuMore = ({ data }: menuMoreInterface) => {
    // Variables
    const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

    // Functions
    const onMouseEnter = () => {
        if (data) {
            setShowSubMenu(true);
        }
    };
    const onMouseLeave = () => {
        if (data) {
            setShowSubMenu(false);
        }
    };

    return (
        <div
            className="pointer"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <li className="d-flex align-center p-1.5 relative">
                <IconComponent icon={ICON.FONT.BAR} iconClassName="mr-0.5" />
                <IconComponent
                    icon={ICON.FONT.CHEVRON}
                    direction={ICON.DIRECTION.DOWN}
                    iconClassName="text-10"
                />
                {showSubMenu && (
                    <SubMenu showSubMenu={showSubMenu} data={data} />
                )}
            </li>
        </div>
    );
};

export default MenuMore;
