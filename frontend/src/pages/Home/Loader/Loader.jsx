import './style.css';

import logoLoader from '../../../svg/jedi-logo.svg';

const Loader = () => {
    return (
        <>
            <div className="loader__div">
                <img
                    src={logoLoader}
                    className="loader__logo"
                    alt="Logo jedi do carregamento"
                />
                <p>Carregando...</p>
            </div>
        </>
    );
};

export default Loader;
