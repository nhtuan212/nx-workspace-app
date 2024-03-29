import React from 'react';
import Link from 'next/link';
import SvgIcons from '@components/IconComponent/SvgIcons';
import { ICON, PAGE } from '@/constants';

const LogoComponent = () => {
    return (
        <Link href={PAGE.HOME}>
            <span className="icon max-w-[5rem]">
                <SvgIcons kind={ICON.KEY.LOGO} />
            </span>
        </Link>
    );
};

export default LogoComponent;
