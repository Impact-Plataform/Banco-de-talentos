import './style.css';

const Card = ({ name, imageUrl }) => {
    return (
        <>
            <div className="card">
                <div className="card__img">
                    <img src={imageUrl} alt={`Imagem do personagem${name}`} />
                </div>

                <div className="card__info">
                    <h6 className="card__info___name">{name}</h6>
                </div>
            </div>
        </>
    );
};

export default Card;
