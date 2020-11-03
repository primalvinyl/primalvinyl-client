import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navList } from '../actions';
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
                <div className="logotype">
                    <Link to="/">
                        <h2>My Site</h2>
                    </Link>
                    <div className="copyright">
                        {'© '}{new Date().getFullYear()}{ ' ' }My Site
                    </div>
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