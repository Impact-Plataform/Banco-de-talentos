import Card from "./card.jsx"

const CardContainer = (props)=>{
    try{
    return (
        <>
        <h1>Star Wars Characters</h1>
        <button onClick={()=>props.click()}>Mais Personagens</button>
        <div  className="main">
            {props.data.map((element, index) =>{
                if(element.gender == "n/a"){
                    element.gender = "genderless"
                }
                return <Card 
                key={index}
                name={element.name}
                species={element.species}
                mass={element.mass}
                height={element.height}
                hair_color={element.hair_color}
                skin_color={element.skin_color}
                eye_color={element.eye_color}
                birth_year={element.birth_year}
                gender={element.gender}
                films={element.films}
                />
            })
            }
        </div>
        <span> *BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin - The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.</span>
        </>
        )
    }catch(e){
        console.log(e.message)
    }
}

export default CardContainer