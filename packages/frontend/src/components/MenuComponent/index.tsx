import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import MenuItems from './MenuItems';
import MenuMore from './MenuMore';
import isEmpty from 'lodash/isEmpty';
// import { AppState } from '@/redux/store';
import UseMenuStore from '@/zustand/UseMenuStore';

const MenuComponent = () => {
    // Variables
    const { response } = UseMenuStore(state => state);
    // const { getMenu } = useSelector((state: AppState) => state?.menu) || [];
    const [menuList, setMenuList] = useState<any>([]);
    const [menuMoreList, setMenuMoreList] = useState<any>([]);

    // Hooks
    useEffect(() => {
        const menuLimit = 3;
        !isEmpty(response) && setMenuList(response.slice(0, menuLimit));
        !isEmpty(response) && setMenuMoreList(response.slice(menuLimit));
    }, [response]);

    return (
        <>
            {!isEmpty(response) && (
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
