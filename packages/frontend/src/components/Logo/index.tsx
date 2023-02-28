import React from 'react';
import Link from 'next/link';
import SvgIcons from '@components/Icons/SvgIcons';
import { ICON_KEY } from '@/constants';

const Logo = () => {
    return (
        <div className="logo">
            <Link href="/">
                <span className="icon icon--8x">
                    <SvgIcons kind={ICON_KEY.LOGO} />
                </span>
            </Link>
        </div>
    );
};

export default Logo;
