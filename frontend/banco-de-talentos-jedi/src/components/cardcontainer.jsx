import Stardex from "./stardex"

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
                return <Stardex 
                key={index}
                index={index}
                name={element.name}
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