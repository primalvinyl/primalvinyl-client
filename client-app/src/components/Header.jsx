import React from 'react';
import { NavLink } from 'react-router-dom';
import { navList } from '../__types__';
import './Header.scss';

const Header = () => {
    const NavList = navList.map(link => (
        <li key={link.path}>
            <NavLink exact to={link.path} key={link.path}>
                {link.value}
            </NavLink>
        </li>
    ));

    return (
        <header>
            <div className="wrapper">
                <a href="https://www.dingo.com" className="logotype">
                    <hgroup>
                        <h1>My Site</h1>
                        <h2>My Site</h2>
                    </hgroup>
                </a>
                <nav className="navigation">
                    <ul>{ NavList }</ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
