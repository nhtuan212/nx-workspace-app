import React from 'react';
import dynamic from 'next/dynamic';
import { SvgIconsInterface } from '@/interface';
import { ICON } from '@/constants';

const LogoSvg = dynamic(() => import('./LogoSvg'));
const SearchSvg = dynamic(() => import('./SearchSvg'));
const CartSvg = dynamic(() => import('./CartSvg'));
const CloseSvg = dynamic(() => import('./CloseSvg'));
const BarSvg = dynamic(() => import('./BarSvg'));
const ChevronSvg = dynamic(() => import('./ChevronSvg'));

const SvgIcons = ({ kind, direction }: SvgIconsInterface) => {
    switch (kind) {
        case ICON.KEY.LOGO:
            return <LogoSvg />;
        case ICON.KEY.SEARCH:
            return <SearchSvg />;
        case ICON.KEY.CART:
            return <CartSvg />;
        case ICON.KEY.CLOSE:
            return <CloseSvg />;
        case ICON.KEY.BAR:
            return <BarSvg />;
        case ICON.KEY.CHEVRON:
            return <ChevronSvg direction={direction} />;
        default:
            return null;
    }
};

export default SvgIcons;
