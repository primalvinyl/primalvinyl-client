import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
    const navList = [
        { path: '/', value: 'Home'},
        { path: '/about-us', value: 'About Us'}
    ];
    const NavList = navList.map(link => (
        <li key={link.path}>
            <NavLink exact to={link.path} key={link.path}>
                {link.value}
            </NavLink>
        </li>
    ));

    return (
        <nav>
            <ul>{ NavList }</ul>
        </nav>
    );
};

export default Navigation;
