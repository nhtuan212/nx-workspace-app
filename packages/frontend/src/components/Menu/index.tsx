import React from 'react';
import { useSelector } from 'react-redux';
import MenuItems from './MenuItems';

const Menu = () => {
    const { getMenu } = useSelector<any, any>(state => state?.menu);

    return (
        getMenu && (
            <ul className="d-flex">
                {getMenu.map((item: any) => (
                    <MenuItems key={item?.id} data={item} />
                ))}
            </ul>
        )
    );
};

export default Menu;
