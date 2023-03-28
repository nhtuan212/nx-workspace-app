import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SvgIcons from '@components/IconComponent/SvgIcons';
import { ICON, PAGE } from '@/constants';
import classNames from 'classnames';

const MenuItems = (props: any) => {
    // Variables
    const [isSubMenu, setIsSubMenu] = useState<boolean>(false);
    const { slug, name, subMenus }: any = props?.data || undefined;

    // ClassNames
    const itemMenuClassName = classNames(isSubMenu && 'd-flex align-center');

    // Hooks
    useEffect(() => {
        setIsSubMenu(Array.isArray(subMenus) && subMenus.length > 0);
    }, []);

    return (
        <div>
            <li className="p-1.5">
                <Link href={slug || PAGE.HOME} className={itemMenuClassName}>
                    <span>{name}</span>
                    {isSubMenu && (
                        <span className="icon icon--tiny10 ml-0.5">
                            <SvgIcons
                                kind={ICON.FONT.CHEVRON}
                                direction={ICON.DIRECTION.DOWN}
                            />
                        </span>
                    )}
                </Link>
            </li>
        </div>
    );
};

export default MenuItems;
