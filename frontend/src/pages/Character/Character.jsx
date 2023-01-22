import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useEndpoints from '../../hooks/useEndpoints';
import api from '../../services/api';
import getUrlId from '../../utils/getUrlId';

import FilmCard from './FilmCard/FilmCard';
import './style.css';

const Character = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState([]);
    const { films, planets, isLoading } = useEndpoints();

    useEffect(() => {
        async function fetchCharacter() {
            try {
                const response = await api.get(`people/${id}`);
                const characterData = await response.data;
                setCharacter(characterData);
            } catch (error) {}
        }
        fetchCharacter();
    }, [id]);

    return (
        <>
            <section className="container">
                <div className="character__box">
                    <div className="character__img">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                            alt={`imagem do personagem${character.name}`}
                        />
                    </div>

                    <div className="character__info">
                        <h2 className="character__title">{character.name}</h2>

                        <div className="character__detail">
                            <div className="character__detail___item">
                                <label>Planeta natal</label>
                                {planets.map(
                                    (planet) =>
                                        character.homeworld.includes(
                                            planet.url,
                                        ) && <span key={planet.name}>{planet.name}</span>,
                                )}
                            </div>

                            <div className="character__detail___item">
                                <label>Ano de nascimento</label>
                                <span>{character.birth_year}</span>
                            </div>

                            <div className="character__detail___item">
                                <label>Gênero</label>
                                <span>{character.gender}</span>
                            </div>

                            <div className="character__detail___item">
                                <label>Altura</label>
                                <span>{character.height}</span>
                            </div>
                        </div>
                        <div className="character__films">
                            <h4>Filmes</h4>

                            <div className="character__films___list">
                                {films.map(
                                    (film) =>
                                        character.films.includes(film.url) && (
                                            <FilmCard
                                                key={film.title}
                                                title={film.title}
                                                imageUrl={`https://starwars-visualguide.com/assets/img/films/${getUrlId(
                                                    film.url,
                                                )}.jpg`}
                                            />
                                        ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Character;
