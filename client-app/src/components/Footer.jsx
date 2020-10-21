import React from 'react';
import { NavLink } from 'react-router-dom';
import { navList } from '../__types__';
import './Footer.scss';

const Footer = () => {
    const NavList = navList.map(link => (
        <li key={link.path}>
            <NavLink exact to={link.path} key={link.path}>
                {link.value}
            </NavLink>
        </li>
    ));

    return (
        <footer>
            <div className="wrapper">
                <a href="https://www.dingo.com" className="logotype">
                    <h2>My Site</h2>
                </a>
                <div className="copyright">
                    {'© '}{new Date().getFullYear()}{ ' ' }My Site
                </div>
                <div className="navigation">
                    <nav>
                        <ul>{ NavList }</ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;