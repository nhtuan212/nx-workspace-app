import React from 'react';
import Logo from '@components/Logo';
import Search from '@/components/SearchComponent';
import Menu from '@components/MenuComponent';
import Cart from '@components/Cart';

const Header = () => {
    return (
        <header className="relative py-1">
            <div className="container d-flex justify-between align-center">
                <section className="logo">
                    <Logo />
                </section>
                <section className="menu">
                    <Menu />
                </section>
                <section className="d-flex justify-end">
                    <Search />
                    <div className="ml-0.5">
                        <Cart />
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Header;
