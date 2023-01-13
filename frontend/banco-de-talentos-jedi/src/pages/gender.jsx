import CardContainer from "../components/cardcontainer.jsx"
import { useContext } from "react"
import { Context } from "../context/context.jsx"
import { useState } from "react"

function Gender(){
    const {starData} = useContext(Context)
    const [data, setData] = useState(starData)
    const [mClass, setMClass] = useState("gender")
    const [fClass, setFClass] = useState("gender")
    const [gClass, setGClass] = useState("gender")
    const male = starData.filter((element)=> element.gender == "male")
    const female = starData.filter((element)=> element.gender == "female")
    const genderless = starData.filter((element)=> element.gender == "genderless")    

    return (
        <main>
            <div className="genderButton">
                <button className={mClass} onClick={(e)=>{
                    e.preventDefault()
                    setData(male)
                    setFClass("gender")
                    setMClass("gactive")
                    setGClass("gender")
                    }}>Male</button> 
                
                <button className={fClass} onClick={(e)=>{
                    e.preventDefault()
                    setData(female)
                    setFClass("gactive")
                    setMClass("gender")
                    setGClass("gender")
                    }}>Female</button> 
                
                <button className={gClass} onClick={(e)=>{
                    e.preventDefault()
                    setData(genderless)
                    setFClass("gender")
                    setMClass("gender")
                    setGClass("gactive")
                    }}>Genderless</button> 
            </div>
            <section className="main">
                <CardContainer data={data}/>
            </section>
        </main>
    )
}

export default Gender