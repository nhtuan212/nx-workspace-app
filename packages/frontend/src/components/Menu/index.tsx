import React from 'react';
import { useSelector } from 'react-redux';
import MenuItems from './menuItems';

const Menu = () => {
    const { getMenu } = useSelector<any, any>(state => state?.menu);

    return (
        <div className="menu">
            {getMenu.map((item: any) => (
                <MenuItems key={item?.id} data={item} />
            ))}
        </div>
    );
};

export default Menu;
