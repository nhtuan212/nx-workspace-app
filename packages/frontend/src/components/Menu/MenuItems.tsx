import React from 'react';

const MenuItems = (props: any) => {
    return (
        <li className="px-1.5">
            <a href="">{props?.data?.name}</a>
        </li>
    );
};

export default MenuItems;
