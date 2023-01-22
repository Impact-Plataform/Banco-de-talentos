import './style.css';

const FilmCard = ({ title, imageUrl}) => {
    return (
        <>
            <div className="film__card">
                <img src={imageUrl} alt={`Imagem go filme${title}`} />
                <p>{title}</p>
            </div>
        </>
    );
};

export default FilmCard;
