import React, { useState } from 'react';
import { menuMoreInterface } from '@/interface';
import SubMenu from './SubMenu';
import { ICON } from '@/constants';
import IconComponent from '../IconComponent';
import styles from '@styles/components/menu.module.scss';

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
            className={styles.menu__more}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex items-center">
                <IconComponent icon={ICON.FONT.BAR} iconClassName="mr-2" />
                <IconComponent
                    icon={ICON.FONT.CHEVRON}
                    direction={ICON.DIRECTION.DOWN}
                    iconClassName="text-[10px]"
                />
                {showSubMenu && (
                    <SubMenu showSubMenu={showSubMenu} data={data} />
                )}
            </div>
        </div>
    );
};

export default MenuMore;
