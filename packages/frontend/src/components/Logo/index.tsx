import React from 'react';
import SvgIcons from '../Icons/SvgIcons';
import { ICON_KEY } from '@/constants';

const Logo = () => {
    return (
        <div className="logo">
            <span className="icon icon--8x">
                <SvgIcons kind={ICON_KEY.LOGO} />
            </span>
        </div>
    );
};

export default Logo;
