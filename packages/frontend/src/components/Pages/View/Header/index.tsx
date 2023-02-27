import React, { useEffect } from 'react';
import Logo from '@components/Logo';
import Search from '@components/Search';
import Cart from '@components/Cart';
import Menu from '@components/Menu';

const Header = () => {
    return (
        <header className="relative py-1">
            <div className="container d-flex justify-between align-center">
                <div>
                    <Logo />
                </div>
                <div>
                    <Menu />
                </div>
                <div className="d-flex justify-end">
                    <div className="ml-0.5">
                        <Search />
                    </div>
                    <div className="ml-0.5">
                        <Cart />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
