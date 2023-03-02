import React from 'react';
import dynamic from 'next/dynamic';
import { SvgIconsInterface } from '@/interface';
import { ICON_KEY } from '@/constants';

const LogoSvg = dynamic(() => import('./LogoSvg'));
const SearchSvg = dynamic(() => import('./SearchSvg'));
const CartSvg = dynamic(() => import('./CartSvg'));
const CloseSvg = dynamic(() => import('./CloseSvg'));
const ChevronSvg = dynamic(() => import('./ChevronSvg'));

const SvgIcons = ({ kind }: SvgIconsInterface) => {
    switch (kind) {
        case ICON_KEY.LOGO:
            return <LogoSvg />;
        case ICON_KEY.SEARCH:
            return <SearchSvg />;
        case ICON_KEY.CART:
            return <CartSvg />;
        case ICON_KEY.CLOSE:
            return <CloseSvg />;
        case ICON_KEY.CHEVRON:
            return <ChevronSvg />;
        default:
            return null;
    }
};

export default SvgIcons;
