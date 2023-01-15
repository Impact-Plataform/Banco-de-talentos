import { NavLink } from 'react-router-dom';
import './style.css';

const MenuMobile = ({ isActive, navLinkStyles }) => {
    return (
        <>
            <div
                className={
                    isActive
                        ? 'menu__mobile menu__mobile--show'
                        : 'menu__mobile'
                }
            >
                <ul className="nav__mobile">
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
            </div>
        </>
    );
};

export default MenuMobile;
