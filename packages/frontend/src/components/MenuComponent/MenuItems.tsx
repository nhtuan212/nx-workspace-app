import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ICON, PAGE } from '@/constants';
import classNames from 'classnames';
import IconComponent from '../IconComponent';
import styles from '@styles/components/menu.module.scss';

const MenuItems = (props: any) => {
    // Variables
    const [isSubMenu, setIsSubMenu] = useState<boolean>(false);
    const { slug, name, subMenus }: any = props?.data || undefined;

    // ClassNames
    const itemMenuClassName = classNames(isSubMenu && 'flex items-center');

    // Hooks
    useEffect(() => {
        setIsSubMenu(Array.isArray(subMenus) && subMenus.length > 0);
    }, []);

    return (
        <div>
            <li className={styles.menu__item}>
                <Link href={slug || PAGE.HOME} className={itemMenuClassName}>
                    <span>{name}</span>
                    {isSubMenu && (
                        <IconComponent
                            icon={ICON.FONT.CHEVRON}
                            direction={ICON.DIRECTION.DOWN}
                            iconClassName="text-[10px] ml-2"
                        />
                    )}
                </Link>
            </li>
        </div>
    );
};

export default MenuItems;
