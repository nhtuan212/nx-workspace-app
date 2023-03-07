// import Link from 'next/link';
import React, { useEffect } from 'react';
// import SvgIcons from '@components/IconComponent/SvgIcons';
// import { ICON_KEY } from '@/constants';
// import classNames from 'classnames';

const MenuItems = (props: any) => {
    // Variables
    // const [isSubMenu, setIsSubMenu] = useState<boolean>(false);
    // const { slug, name, subMenus }: any = props?.data;

    // Setup ClassName
    // const itemMenuClassName = classNames(
    // 	isSubMenu && 'd-flex align-center'
    // );

    // Hook
    useEffect(() => {
        console.log({ props });

        // setIsSubMenu(Array.isArray(subMenus) && subMenus.length > 0);
    }, []);

    return (
        <li className="px-1.5">
            {/* <Link className={itemMenuClassName} href={slug}>
				{name}
				{isSubMenu && (
					<span className='icon icon--tiny10 ml-0.5'>
						<SvgIcons kind={ICON_KEY.CHEVRON_DOWN} />
					</span>
				)}
			</Link> */}
        </li>
    );
};

export default MenuItems;
