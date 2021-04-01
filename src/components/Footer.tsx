import React from 'react';
import { Link } from 'react-router-dom';
/*
import { NavLink, Link } from 'react-router-dom';
import { navList } from './types';
*/
import styles from './Footer.module.scss';

const Footer = (): React.ReactElement => {
    /*
    const NavList = navList.map(link => (
        <li key={link.path}>
            <NavLink exact to={link.path} key={link.path}>
                {link.value}
            </NavLink>
        </li>
    ));
    */

    return (
        <footer className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.logotype}>
                    <h2>
                        <Link to="/">
                            Primal Vinyl
                        </Link>
                    </h2>
                    <small className={styles.copyright}>
                        {'© '}{new Date().getFullYear()}
                    </small>
                </div>
                {/*
                <div className={styles.navigation}>
                    <nav>
                        <ul>{NavList}</ul>
                    </nav>
                </div>
                */}
            </div>
        </footer>
    );
};

export default Footer;
