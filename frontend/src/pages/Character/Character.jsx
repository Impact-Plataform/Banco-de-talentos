import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useEndpoints from '../../hooks/useEndpoints';
import api from '../../services/api';

import CaharacterDetail from './CharacterDetail/CaharacterDetail';
import Loader from '../../components/Loader/Loader';

import './style.css';

const Character = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState([]);
    const { films, planets, species, isLoading } = useEndpoints();

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
            {isLoading ? (
                <Loader />
            ) : (
                <section className="container">
                    <div className="character__box">
                        <div className="character__img">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                                alt={`imagem do personagem${character.name}`}
                            />
                        </div>

                        <div className="character__info">
                            <h2 className="character__title">
                                {character.name}
                            </h2>
                            <CaharacterDetail
                                characterDetail={character}
                                planetsDetail={planets}
                                speciesDetail={species}
                            />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Character;
