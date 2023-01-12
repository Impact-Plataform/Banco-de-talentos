import notFoundGif from '../../assets/notFound.gif'
import './index.css'
import Background from '../Background';
import { useNavigate } from 'react-router-dom';




function CharacterNotFound() {

    const nav = useNavigate();

    return (
        <div>
           <Background overlayEnabled={false}/>
            <div className='characterNotFound__container'>
                <img src={notFoundGif} alt="Darth Vader looking to the left. His armor color change to purple and glitch to other colors." />
                    <h1 className="characterNotFound__text">Character not found</h1>
                    <div onClick={() => nav('/')} className='back__button'>Return to main page</div>
            </div>
        </div>
    )
}

export default CharacterNotFound;