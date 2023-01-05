import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailedCharacter } from '../../Services/characterDetailed';
import './index.css'
import Loading from '../../Components/Loading';
import CharacterNotFound from '../../Components/CharacterNotFound';
import videoBackground from '../../assets/background.mp4';
import { CharacterTYPE } from '../../Types';

function CharacterDetails() {

    let userId = useParams();
    const [detailedCharacter, setDetailedCharacter] = useState<CharacterTYPE[]>([]);

    useEffect(() => {
        const recoverCharacter = async () => {
            const character = await getDetailedCharacter(userId.id, setDetailedCharacter);
        }

        recoverCharacter();
    }, [])


    if (detailedCharacter.length === 0) {
        return <Loading />
    }

    if (typeof detailedCharacter === 'string' && detailedCharacter === 'Character not found') {
        return <CharacterNotFound />
    }

    console.log(detailedCharacter);

    return (
        <div>
              <div className="video__details">
                <video autoPlay={true} loop={true} muted={true} src={videoBackground}></video>
            </div>
            <div className="overlay__details"></div>
            {typeof detailedCharacter != 'string' &&
                <div className='character-detailed__space'>
                    <img src={detailedCharacter[0].image} className="details__img" />
                    <div className='character-detailed__container'>
                        <q className='quote'>{detailedCharacter[0].quote}</q>
                        <h2 className='quote__name'>━ {detailedCharacter[0].name}</h2>
                        <div className='character-detailed__container'>
                            <h1>Birth Year</h1>
                            <p>{detailedCharacter[0].birth_year}</p>
                        </div>
                        <div className='character-detailed__container'>
                            <h1>Gender</h1>
                            <p>{detailedCharacter[0].gender}</p>
                        </div>
                        <div className='character-detailed__container'>
                            <h1>Height</h1>
                            <p>{detailedCharacter[0].height} cm</p>
                        </div>
                        <div className='character-detailed__container'>
                            <h1>Mass</h1>
                            <p>{detailedCharacter[0].mass} kg</p>
                        </div>
                        <div className='character-detailed__container'>
                            <h1>Specie</h1>
                            <p>{detailedCharacter[0].species}</p>
                        </div>
                        
                    </div>
                </div>
            }
        </div>
    )
}

export default CharacterDetails;