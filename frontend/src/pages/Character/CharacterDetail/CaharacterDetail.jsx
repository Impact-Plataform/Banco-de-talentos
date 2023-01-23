import planetIcon from '../../../svg/planet-icon.svg';
import birthYearIcon from '../../../svg/birth_year-icon.svg';
import genderIcon from '../../../svg/gender-icon.svg';
import speciesIcon from '../../../svg/species-icon.svg';
import heightIcon from '../../../svg/height-icon.svg';
import massIcon from '../../../svg/mass-icon.svg';

import './style.css';

const CaharacterDetail = ({ planetsDetail, characterDetail, speciesDetail }) => {
    return (
        <>  
            <ul className="character__detail">
                {planetsDetail.map(
                    (planet) =>
                        characterDetail.homeworld.includes(planet.url) && (
                            <li key={planet.name} className="character__detail___item">
                                <img
                                    className="character__detail___icon"
                                    src={planetIcon}
                                    alt="Icone planeta"
                                />

                                <div>
                                    <label>Planeta natal</label>
                                    <span key={planet.name}>{planet.name}</span>
                                </div>
                            </li>
                        ),
                )}

                <li className="character__detail___item">
                    <img
                        className="character__detail___icon"
                        src={birthYearIcon}
                        alt="Icone data de nascimento"
                    />
                    <div>
                        <label>Ano de nascimento</label>
                        <span>{characterDetail.birth_year}</span>
                    </div>
                </li>

                {speciesDetail.map(
                    (spc) =>
                        characterDetail.species.includes(spc.url) && (
                            <li key={spc.name} className="character__detail___item">
                                <img
                                    className="character__detail___icon"
                                    src={speciesIcon}
                                    alt="Icone Espécie"
                                />
                                <div>
                                    <label>Espécie</label>
                                    <span key={spc.name}>{spc.name}</span>
                                </div>
                            </li>
                        ),
                )}

                <li className="character__detail___item">
                    <img
                        className="character__detail___icon"
                        src={genderIcon}
                        alt="Icone gênero"
                    />
                    <div>
                        <label>Gênero</label>
                        <span>{characterDetail.gender}</span>
                    </div>
                </li>

                <li className="character__detail___item">
                    <img
                        className="character__detail___icon"
                        src={heightIcon}
                        alt="Icone altura"
                    />
                    <div>
                        <label>Altura</label>
                        <span>{characterDetail.height}</span>
                    </div>
                </li>

                <li className="character__detail___item">
                    <img
                        className="character__detail___icon"
                        src={massIcon}
                        alt="Icone peso"
                    />
                    <div>
                        <label>Peso</label>
                        <span>{characterDetail.mass}</span>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default CaharacterDetail;
