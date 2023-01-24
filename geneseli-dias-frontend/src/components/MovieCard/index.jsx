import { Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";
import { images } from "../../assets/images";

function MovieCard({ characters }) {
    const { id } = useParams();

    return (
        <div className='movie-card-wrapper'>
            {characters.map(character => (
                <div className="movie-card-data" key={characters.id}>
                    <div className="movie-card">
                        <Link to={`/${character.id}`}>
                            <img className="movie-banner-img" src={character.image} alt={character.title} />
                        </Link>
                    </div>

                    <img src={images.characters[character.name]} alt="" />
                    <div className="overlay">
                        <div className="title">
                            <h3>{character.name}</h3>
                            <span className="id">{id}</span>
                        </div>
                    </div>

                
                    <div className="movie-banner-movie-title">
                        <span>{character.title}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieCard;
