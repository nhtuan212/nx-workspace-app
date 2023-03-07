import React from 'react';
import { useSelector } from 'react-redux';
import MenuItems from './MenuItems';
import { menuList } from '@/pages/api/menuApi';

const MenuComponent = () => {
    const { getMenu } = useSelector<any, any>(state => state?.menu);

    return (
        getMenu && (
            <ul className="d-flex">
                {menuList.map((item: any) => (
                    <MenuItems key={item?.id} data={item} />
                ))}
            </ul>
        )
        // getMenu && (
        //     <ul className="d-flex">
        //         {getMenu.map((item: any) => (
        //             <MenuItems key={item?.id} data={item} />
        //         ))}
        //     </ul>
        // )
    );
};

export default MenuComponent;
