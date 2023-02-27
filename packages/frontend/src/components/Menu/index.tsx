import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MenuItems from './MenuItems';

const Menu = () => {
    const { getMenu } = useSelector<any, any>(state => state?.menu);

    return (
        <div className="menu">
            <ul className="d-flex">
                {getMenu.map((item: any) => (
                    <MenuItems key={item?.id} data={item} />
                ))}
            </ul>
        </div>
    );
};

export default Menu;
