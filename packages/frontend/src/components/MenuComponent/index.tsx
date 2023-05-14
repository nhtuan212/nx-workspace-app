import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MenuItems from './MenuItems';
import MenuMore from './MenuMore';
import isEmpty from 'lodash/isEmpty';
import { AppState } from '@/redux/store';
import styles from '@styles/components/menu.module.scss';

const MenuComponent = () => {
    // Variables
    const { getMenu } = useSelector((state: AppState) => state?.menu) || [];
    const [menuList, setMenuList] = useState<any>([]);
    const [menuMoreList, setMenuMoreList] = useState<any>([]);

    // Hooks
    useEffect(() => {
        const menuLimit = 3;
        !isEmpty(getMenu) && setMenuList(getMenu.slice(0, menuLimit));
        !isEmpty(getMenu) && setMenuMoreList(getMenu.slice(menuLimit));
    }, [getMenu]);

    return (
        <>
            {!isEmpty(getMenu) && (
				<ul className={styles.menu}>
                    {menuList.map((item: any) => (
                        <MenuItems key={item?.id} data={item} />
                    ))}
                    {!isEmpty(menuMoreList) && <MenuMore data={menuMoreList} />}
                </ul>
            )}
        </>
    );
};

export default MenuComponent;
