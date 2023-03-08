import React, { useState } from 'react';
import { menuMoreInterface } from '@/interface';
import SvgIcons from '@components/IconComponent/SvgIcons';
import SubMenu from './SubMenu';
import { ICON } from '@/constants';

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
        <div className="pointer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <li className="d-flex align-center p-1.5 relative">
                <span className="icon icon--small mr-0.5">
                    <SvgIcons kind={ICON.KEY.BAR} />
                </span>
                <span className="icon icon--tiny10">
                    <SvgIcons kind={ICON.KEY.CHEVRON} direction={ICON.DIRECTION.DOWN} />
                </span>
                {showSubMenu && <SubMenu showSubMenu={showSubMenu} data={data} />}
            </li>
        </div>
    );
};

export default MenuMore;
