import React from 'react';
import Logo from '@components/LogoComponent';
import Search from '@components/SearchComponent';
import Menu from '@components/MenuComponent';
import Cart from '@components/CartComponent';

const Header = () => {
    return (
        <header className="relative">
            <div className="container flex justify-between items-center">
                <section>
                    <Logo />
                </section>
                <section>
                    <Menu />
                </section>
                <section className="flex justify-end">
                    <Search />
                    <div className="ml-2">
                        <Cart />
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Header;
