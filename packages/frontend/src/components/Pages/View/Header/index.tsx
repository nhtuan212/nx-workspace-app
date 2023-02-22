import React from 'react';
import Logo from '@/components/Logo';
import Search from '@/components/Search';
import Cart from '@/components/Cart';

const Header = () => {
    return (
        <header className="header py-5">
            <div className="container">
                <div className="col">
                    <Logo />
                </div>
                <div className="col d-flex justify-end">
                    <Search />
                </div>
                <div className="col d-flex justify-end">
                    <Cart />
                </div>
            </div>
        </header>
    );
};

export default Header;
