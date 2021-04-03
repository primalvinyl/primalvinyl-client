import React from 'react';
import { Link } from 'react-router-dom';
/*
import { NavLink, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { navList } from './types';
import { useBreakpoint } from '../utility/BreakpointProvider';
*/
import monster from '../images/monster.png';
import styles from './Header.module.scss';

const Header = (): React.ReactElement => {
    const headerRef = React.useRef<HTMLElement>(null);

    /*
    const breakpoint = useBreakpoint();
    const [toggleNav, setToggleNav] = React.useState(false);
    const NavList = navList.map(link => (
        <li key={link.path}>
            <NavLink exact to={link.path} key={link.path}>
                {link.value}
            </NavLink>
        </li> 
    ));

    // detects mouse clicks outside nav
    React.useEffect(() => {
        document.addEventListener('mousedown', clickHandler);
        return () => document.removeEventListener('mousedown', clickHandler);
    }, []);
 
    const clickHandler = (event: MouseEvent): void => {
        if (headerRef.current && headerRef.current.contains(event.target as Node)) return;
        else setToggleNav(false);
    };

    const toggleNavHandler = (event: React.MouseEvent): void => {
        event.stopPropagation();
        setToggleNav(!toggleNav);
    };
    */

    return (
        <header ref={headerRef} className={styles.root}>
            <div className={styles.wrapper}>
                {/*
                    breakpoint.lgDown &&
                    <button className={styles.navToggle} onClick={toggleNavHandler}>
                        <svg viewBox="0 0 100 80" width="25" height="30">
                            <rect width="100" height="15" rx="8" fill="gray"></rect>
                            <rect y="30" width="100" height="15" rx="8" fill="gray"></rect>
                            <rect y="60" width="100" height="15" rx="8" fill="gray"></rect>
                        </svg>
                    </button>
                */}
                <figure><img src={monster} alt="Logo" /></figure>
                <h1>
                    <Link to="/">
                        Primal Vinyl - Song Lyrics Search
                    </Link>
                </h1>
                {/*
                    <CSSTransition
                        in={toggleNav}
                        timeout={300}
                        classNames={{
                            enter: styles.enter,
                            enterDone: styles.enterDone
                    }}>
                        <nav className={styles.navigation}>
                            {(toggleNav || breakpoint.lgUp) &&
                                <ul>{NavList}</ul>
                            }
                        </nav>
                    </CSSTransition>
                */}
            </div>
        </header>
    );
};

export default Header;
