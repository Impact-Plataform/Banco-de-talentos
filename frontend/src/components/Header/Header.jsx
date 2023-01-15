import './style.css';
import logo from '../../svg/logo.svg';

const Header = () => {
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
            </header>
        </>
    );
};

export default Header;
