import Stardex from "./stardex"

const CardContainer = (props)=>{
    try{
    return (
        <>
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
        </>
        )
    }catch(e){
        console.log(e.message)
    }
}

export default CardContainer