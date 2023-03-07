import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SvgIcons from '@components/IconComponent/SvgIcons';
import { ICON_KEY } from '@/constants';
import classNames from 'classnames';
import SubMenu from '@components/MenuComponent/SubMenu';

const MenuItems = (props: any) => {
    // Variables
    const [isSubMenu, setIsSubMenu] = useState<boolean>(false);
    const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
    const { slug, name, subMenus }: any = props?.data || undefined;

    // Setup ClassName
    const itemMenuClassName = classNames(isSubMenu && 'd-flex align-center');

    // Functions
    const onMouseEnter = () => {
        if (isSubMenu) {
            setShowSubMenu(true);
        }
    };
    const onMouseLeave = () => {
        if (isSubMenu) {
            setShowSubMenu(false);
        }
    };

    // Hook
    useEffect(() => {
        setIsSubMenu(Array.isArray(subMenus) && subMenus.length > 0);
    }, []);

    return (
        <>
            <li className="px-1.5" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Link className={itemMenuClassName} href={slug}>
                    {name}
                    {isSubMenu && (
                        <span className="icon icon--tiny10 ml-0.5">
                            <SvgIcons kind={ICON_KEY.CHEVRON} direction={'down'} />
                        </span>
                    )}
                </Link>
            </li>
            <SubMenu showSubMenu={showSubMenu} />
        </>
    );
};

export default MenuItems;
