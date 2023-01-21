import { Link } from 'react-router-dom';
import './style.css';

const Card = ({ infos, imageUrl, id }) => {
    return (
        <>
            <div className="card">
                <div className="card__img">
                    <img
                        src={imageUrl}
                        alt={`Imagem do personagem${infos.name}`}
                    />
                </div>
                <div className="card__intro">
                    <div className="card__title">
                        <h6 className="card__info___name">{infos.name}</h6>
                    </div>
                    <div className="card__info">
                        <p>
                            Ano de nasc.: <span>{infos.birth_year}</span>
                        </p>
                        <p>
                            Gênero: <span>{infos.gender}</span>
                        </p>

                        <Link className="card__info___link" to={'/character/' + id}>
                            Ver mais...
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
