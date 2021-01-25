import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { navList } from './types';
import { useBreakpoint } from '../utility/BreakpointProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

const Header = (): React.ReactElement => {
    const headerRef = React.useRef<HTMLElement>(null);
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

    return (
        <header ref={headerRef} className={styles.root}>
            <div className={styles.wrapper}>
                {breakpoint.lgDown &&
                    <button className={styles.navToggle} onClick={toggleNavHandler}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                }
                <Link to="/" className={styles.logotype}>
                    <hgroup>
                        <h1>Primal Vinyl</h1>
                        <h2>Primal Vinyl</h2>
                    </hgroup>
                </Link>
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
            </div>
        </header>
    );
};

export default Header;
