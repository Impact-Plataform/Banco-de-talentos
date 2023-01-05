import notFoundGif from '../../assets/notFound.gif'
import Background from '../Background';
import './index.css'




function CharacterNotFound() {

    return (
        <div>
           <Background/>
            <div className='characterNotFound__container'>
                <img src={notFoundGif} alt="Darth Vader looking to the left. His armor color change to purple and glitch to other colors." />
                    <h1 className="characterNotFound__text">Character not found</h1>
            </div>
        </div>
    )
}

export default CharacterNotFound;