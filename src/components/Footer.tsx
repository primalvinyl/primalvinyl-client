import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navList } from '../__types__';
import styles from './Footer.module.scss';

const Footer = (): React.ReactElement => {
    const NavList = navList.map(link => (
        <li key={link.path}>
            <NavLink exact to={link.path} key={link.path}>
                {link.value}
            </NavLink>
        </li>
    ));

    return (
        <footer className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.logotype}>
                    <Link to="/">
                        <h2>Primal Vinyl</h2>
                    </Link>
                    <div className={styles.copyright}>
                        {'© '}{new Date().getFullYear()}{ ' ' }Primal Vinyl
                    </div>
                </div>
                <div className={styles.navigation}>
                    <nav>
                        <ul>{NavList}</ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
