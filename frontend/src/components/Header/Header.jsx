import './style.css';
import logo from '../../svg/logo.svg';
import { useState } from 'react';
import MenuMobile from './MenuMobile/MenuMobile';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <div className="header__logo">
                        <img src={logo} alt="Logo Star Wars" />
                    </div>

                    <ul className="header__menu">
                        <li>
                            <a href="">Início</a>
                        </li>
                        <li>
                            <a href="">Sobre</a>
                        </li>
                        <li>
                            <a href="">Contato</a>
                        </li>
                    </ul>
                </nav>

                <div
                    className={isActive ? 'bx bx--active' : 'bx'}
                    onClick={onClick}
                ></div>
            </header>

            <MenuMobile isActive={isActive}/>
        </>
    );
};

export default Header;
