import { Link, useParams } from "react-router-dom";
import { images } from "../../assets/images";
import "./styles.css";

function Card({ movieData }) {
  const { name } = useParams();
  console.log(movieData);
  return (
    <div className="movie-card-wrapper">
      <div className="movie-characters-cards">
        {movieData.map((character) => (
          <div className="character-card-data" key={character.id}>         
            
              <span className="up"></span>             
              
            <div className="overlay">
              <div className="title">
                <h2>{character.name}</h2>
                <span className="id">{character.id}</span>
              </div>
              
                <div className="status">
                  <ul>
                      <li><strong>Height</strong>: {character.height}</li>
                      <li><strong>Birth Year</strong>: {character.birth_year}</li>
                  </ul>
                </div>
                <Link to={`/${character.name}`}>
                <img
                  src={images.characters[character.name]}
                  alt={character.name}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
