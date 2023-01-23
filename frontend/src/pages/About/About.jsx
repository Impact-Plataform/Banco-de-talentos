import './style.css';
import jediLogo from '../../svg/jedi-logo.svg';

const About = () => {
    return (
        <>
            <section className="container">
                <div className="about">
                    <div className="about__contents">
                        <h1 className="about__title">Desafio Jedi</h1>
                        <p className="about__text">
                            O desafio Jedi tem como objetivo avaliar o
                            cohecimento e habilidades como desenvolvedor
                            Front-end. A apçicação foi desenvolvida para
                            demonstrar na prática uma SPA, consultas em API,
                            React Hooks e demais conceitos de React.js. veja
                            mais informações clicando logo abaixo...
                        </p>
                        <a
                            href="https://github.com/jeanwilker/Banco-de-talentos/tree/jean-wilker-frontend/frontend"
                            className="about__btn"
                        >
                            Saber mais
                        </a>
                    </div>

                    <div className="about__logo">
                        <img src={jediLogo} alt="Imagem da logo Jedi." />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
