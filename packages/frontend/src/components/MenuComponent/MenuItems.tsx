import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ICON, PAGE } from '@/constants';
import classNames from 'classnames';
import IconComponent from '../IconComponent';

const MenuItems = (props: any) => {
    // Variables
    const [isSubMenu, setIsSubMenu] = useState<boolean>(false);
    const { slug, name, subMenus }: any = props?.data || undefined;

    // ClassNames
    const itemMenuClassName = classNames(isSubMenu && 'd-flex align-center');

    // Hooks
    useEffect(() => {
        console.log({ subMenus });

        setIsSubMenu(Array.isArray(subMenus) && subMenus.length > 0);
    }, []);

    return (
        <div>
            <li className="p-1.5">
                <Link href={slug || PAGE.HOME} className={itemMenuClassName}>
                    <span>{name}</span>
                    {isSubMenu && (
                        <IconComponent
                            icon={ICON.FONT.CHEVRON}
                            direction={ICON.DIRECTION.DOWN}
                            iconClassName="text-10 ml-0.5"
                        />
                    )}
                </Link>
            </li>
        </div>
    );
};

export default MenuItems;
