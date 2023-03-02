import Link from 'next/link';
import React from 'react';

const MenuItems = (props: any) => {
    return (
        <li className="px-1.5">
            <Link href={props?.data?.slug}>{props?.data?.name}</Link>
        </li>
    );
};

export default MenuItems;
