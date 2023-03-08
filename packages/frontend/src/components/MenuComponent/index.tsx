import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MenuItems from './MenuItems';
import MenuMore from './MenuMore';
import isEmpty from 'lodash/isEmpty';
import { menuApiList } from '@/pages/api/menuApi';

const MenuComponent = () => {
    // Variables
    const { getMenu } = useSelector<any, any>(state => state?.menu);
    const [menuList, setMenuList] = useState<any>([]);
    const [menuMoreList, setMenuMoreList] = useState<any>([]);

    // Hook
    useEffect(() => {
        menuApiList && setMenuList(menuApiList.slice(0, 3));
        menuApiList && setMenuMoreList(menuApiList.slice(3));
    }, [menuApiList]);

    return (
        <>
            {!isEmpty(getMenu) && (
                <ul className="d-flex align-center">
                    {/* {getMenu.map((item: any) => ( */}
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
