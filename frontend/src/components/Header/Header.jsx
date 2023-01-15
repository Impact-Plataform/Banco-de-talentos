import './style.css';

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../svg/logo.svg';
import MenuMobile from './MenuMobile/MenuMobile';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const onClick = () => setIsActive(!isActive);

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: 'none',
            fontSize: '2rem',
            color: isActive ? '#faf6ed' : '#666',
        };
    };

    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <Link to="/" className="header__logo">
                        <img src={logo} alt="Logo Star Wars" />
                    </Link>

                    <ul className="header__menu">
                        <li>
                            <NavLink to="/" style={navLinkStyles}>
                                Início
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" style={navLinkStyles}>
                                Sobre
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" style={navLinkStyles}>
                                Contato
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div
                    className={isActive ? 'bx bx--active' : 'bx'}
                    onClick={onClick}
                ></div>
            </header>

            <MenuMobile isActive={isActive} navLinkStyles={navLinkStyles}/>
        </>
    );
};

export default Header;
