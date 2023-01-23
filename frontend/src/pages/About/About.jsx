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
                            conhecimento e habilidades como desenvolvedor
                            Front-end. A aplicação foi desenvolvida para
                            demonstrar na prática uma SPA, consultas na API,
                            React Hooks e demais conceitos de React.js. Nela
                            encontra-se uma lista de personagens, podendo
                            pesquisar pelo nome, filtrar gêneros, espécies e
                            filmes em que aparece. Ao clicar no personagem, será
                            redirecionado para uma página interna com mais
                            detalhes do mesmo. Saiba mais clicando no botão
                            abaixo...
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
