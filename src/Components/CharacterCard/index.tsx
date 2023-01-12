import { useNavigate } from 'react-router-dom';
import './index.css';

function CharacterCard({ character }: any) {
    const nav = useNavigate();


    function holdClickedCharacterDetail() {
        nav(`/${character.name}`)
    }

    return (

        <div className="card" onClick={(e) => holdClickedCharacterDetail()}>
            <img src={character.image} className='character__img' alt="" />
            <div className="character__info">
                <h2>NAME</h2>
                <h3>{character.name}</h3>
            </div>
            <div className="character__info">
                <h2>PLANET</h2>
                <h3>{character.homeworld}</h3>
            </div>
        </div>
    )
}

export default CharacterCard;