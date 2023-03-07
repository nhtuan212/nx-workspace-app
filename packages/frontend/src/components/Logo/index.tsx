import React from 'react';
import Link from 'next/link';
import SvgIcons from '@/components/IconComponent/SvgIcons';
import { ICON_KEY, PAGE } from '@/constants';

const Logo = () => {
    return (
        <Link href={PAGE.HOME}>
            <span className="icon icon--8x">
                <SvgIcons kind={ICON_KEY.LOGO} />
            </span>
        </Link>
    );
};

export default Logo;
