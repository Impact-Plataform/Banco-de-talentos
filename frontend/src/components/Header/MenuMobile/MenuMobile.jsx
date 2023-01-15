import './style.css';

const MenuMobile = ({ isActive }) => {
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
                        <a href="">Início</a>
                    </li>
                    <li>
                        <a href="">Sobre</a>
                    </li>
                    <li>
                        <a href="">Contato</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MenuMobile;
