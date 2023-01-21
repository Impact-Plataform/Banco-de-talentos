import FilmCard from './FilmCard/FilmCard';
import './style.css';

const Character = () => {
    return (
        <>
            <section className="container">
                <div className="character__box">
                    <div className="character__img">
                        <img src="" alt="" />
                    </div>

                    <div className="character__info">
                        <h2 className="character__title">Nome do personagem</h2>

                        <div className="character__detail">
                            <div className="character__detail___item">
                                <label>Planeta natal</label>
                                <span>Planeta</span>
                            </div>

                            <div className="character__detail___item">
                                <label>Ano de nascimento</label>
                                <span>Ano</span>
                            </div>

                            <div className="character__detail___item">
                                <label>Gênero</label>
                                <span>Gênero</span>
                            </div>

                            <div className="character__detail___item">
                                <label>Altura</label>
                                <span>Altura</span>
                            </div>
                        </div>
                        <div className="character__films">
                            <h4>Filmes</h4>

                            <div className="character__films___list">
                                <FilmCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Character;
