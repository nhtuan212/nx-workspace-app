import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Menu = () => {
    const { getMenu } = useSelector<any, any>(state => state?.menus);

    const [menuItems, setMenuItems] = useState<[]>([]);

    useEffect(() => {
        setMenuItems(getMenu);
    }, [menuItems]);

    // useEffect(() => {
    //     fetch('https://61dd3beff60e8f0017668670.mockapi.io/menus')
    //         .then(res => res.json())
    //         .then(result => {
    //             setMenuItems(result);
    //         });
    // }, []);

    useEffect(() => {
        console.log('render', menuItems);
    }, [menuItems]);

    return <div className="menu">{/* {(getMenu || []).map(item => item?.name)} */}</div>;
};

export default Menu;
