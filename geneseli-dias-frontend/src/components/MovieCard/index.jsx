import { Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";
import { images } from "../../assets/images";

function MovieCard({ personagens }) {
    const { id } = useParams();

    return (
        <div className='movie-card-wrapper'>
            {personagens.map(personagem => (
                <div className="movie-card-data" key={personagens.id}>
                    <div className="movie-card">
                        <Link to={`/${personagem.id}`}>
                            <img className="movie-banner-img" src={personagem.image} alt={personagem.title} />
                        </Link>
                    </div>

                    <img src={images.personagens[personagem.name]} alt="" />
                    <div className="overlay">
                        <div className="title">
                            <h3>{personagem.name}</h3>
                            <span className="id">{id}</span>
                        </div>
                    </div>

                
                    <div className="movie-banner-movie-title">
                        <span>{personagem.title}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieCard;
