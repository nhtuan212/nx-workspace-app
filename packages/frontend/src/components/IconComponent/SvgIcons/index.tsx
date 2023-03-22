import React from 'react';
import dynamic from 'next/dynamic';
import { SvgIconsInterface } from '@/interface';
import { ICON } from '@/constants';

const LogoSvg = dynamic(() => import('./LogoSvg'));

const SvgIcons = ({ kind }: SvgIconsInterface) => {
    switch (kind) {
        case ICON.KEY.LOGO:
            return <LogoSvg />;
        default:
            return null;
    }
};

export default SvgIcons;
