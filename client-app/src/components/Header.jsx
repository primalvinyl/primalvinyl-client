import React from 'react';
import { NavLink } from 'react-router-dom';
import { navList } from '../__types__';
import { useBreakpoint } from '../utilities/BreakpointProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
    const breakpoint = useBreakpoint();
    const [toggleNav, setToggleNav] = React.useState(false);
    const NavList = navList.map(link => (
        <li key={link.path}>
            <NavLink exact to={link.path} key={link.path}>
                {link.value}
            </NavLink>
        </li>
    ));
    const toggleNavHandler = () => {
        setToggleNav(!toggleNav);
    };

    return (
        <header>
            <div className="wrapper">
                {breakpoint.lgDown &&
                    <button className="nav-toggle" onClick={toggleNavHandler}>
                    <FontAwesomeIcon icon={faBars} />
                    </button>
                }
                <a href="/" className="logotype">
                    <hgroup>
                        <h1>My Site</h1>
                        <h2>My Site</h2>
                    </hgroup>
                </a>
                {(toggleNav || breakpoint.lgUp) &&
                    <nav className="navigation">
                        <ul>{ NavList }</ul> 
                    </nav>
                }
            </div>
        </header>
    );
};

export default Header;
