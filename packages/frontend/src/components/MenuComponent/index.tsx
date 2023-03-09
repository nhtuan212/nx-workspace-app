import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MenuItems from './MenuItems';
import MenuMore from './MenuMore';
import isEmpty from 'lodash/isEmpty';

const MenuComponent = () => {
    // Variables
    const { getMenu } = useSelector<any, any>(state => state?.menu);
    const [menuList, setMenuList] = useState<any>([]);
    const [menuMoreList, setMenuMoreList] = useState<any>([]);

    // Hook
    useEffect(() => {
        !isEmpty(getMenu) && setMenuList(getMenu.slice(0, 3));
        !isEmpty(getMenu) && setMenuMoreList(getMenu.slice(3));
    }, [getMenu]);

    return (
        <>
            {!isEmpty(getMenu) && (
                <ul className="d-flex align-center">
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
