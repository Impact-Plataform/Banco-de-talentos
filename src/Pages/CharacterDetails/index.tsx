import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailedCharacter } from '../../Services/characterDetailed';
import './index.css'
import Loading from '../../Components/Loading';
import CharacterNotFound from '../../Components/CharacterNotFound';
import { CharacterTYPE } from '../../Types';
import Background from '../../Components/Background';

function CharacterDetails() {
    const [detailedCharacter, setDetailedCharacter] = useState<any>([]);
    let getName = useParams();
    let characterName:string = getName.id!;

    useEffect(() => {
        const getDetailedCharacterData = async () => {
            const character = await getDetailedCharacter(characterName, setDetailedCharacter);
        }



        getDetailedCharacterData();
    }, [])


    if (detailedCharacter.length === 0) {
        return <Loading />
    }

    if (typeof detailedCharacter === 'string' && detailedCharacter === 'Character not found') {
        return <CharacterNotFound />
    }

    return (
        <div>
            <Background overlayEnabled={false} />
            {typeof detailedCharacter != 'string' &&
                <div className='character-detailed__space'>
                    <img src={detailedCharacter[0].image} alt={detailedCharacter.name} className="details__img" />
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
                            <h1>Species</h1>
                            <p>{detailedCharacter[0].species}</p>
                        </div>
                    </div>
                </div>
            }
            <div className='character__summary'>
                <h1>About {detailedCharacter[0].name}</h1>
                <p>{detailedCharacter[0].description}</p>
            </div>
            <div className='films__container'>
                {detailedCharacter[0].filmsDetails.map((item: CharacterTYPE) => {
                    return (
                        <div className='unique__film'>
                            <h2>{item.name}</h2>
                            <img className='films__img' src={item.image} alt="A film of Star Wars" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CharacterDetails;

