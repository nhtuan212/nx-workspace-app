import React from 'react';
import Logo from '@/components/Logo';
import Search from '@/components/Search';
import Cart from '@/components/Cart';
import Menu from '@/components/Menu';
import styles from './headerStyles.module.scss';

const Header = () => {
    return (
        <header className={`${styles['header']} relative py-1`}>
            <div className="container d-flex align-center">
                <div className="col">
                    <Logo />
                </div>
                <div className="col">
                    <Menu />
                </div>
                <div className="col d-flex justify-end">
                    <div className="mx-0.5">
                        <Search />
                    </div>
                    <div className="mx-0.5">
                        <Cart />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
