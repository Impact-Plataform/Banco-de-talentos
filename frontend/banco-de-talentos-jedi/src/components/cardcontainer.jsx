import Stardex from "./stardex"

const CardContainer = (props)=>{
    try{
        if(props.ipage == true){
            return (
                <>
                <div  className="main">
                    {props.data.map((element, index) =>{
                        if(element.gender == "n/a" || element.gender == "none"){
                            element.gender = "genderless"
                        }
                        element.id=index
                        return <Stardex 
                        key={index}
                        id={element.id}
                        name={element.name}
                        />
                    })
                    }
                </div>
                </>
                )
        }else{
            return (
                <>
                <div  className="main">
                    {props.data.map((element, index) =>{
                        return <Stardex 
                        key={index}
                        id={element.id}
                        name={element.name}
                        />
                    })
                    }
                </div>
                </>
            )
        }

    }catch(e){
        console.log(e.message)
    }
}

export default CardContainer