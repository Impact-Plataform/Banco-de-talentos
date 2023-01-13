import { useState } from "react"
import { useContext } from "react"
import CardContainer from "../components/cardcontainer"
import { Context } from "../context/context"
import reverseList from "../services/reverseSpecieList"
import listOfSpecies from "../services/specieList"


const Specie = ()=>{
    const {starData} = useContext(Context)
    const [data, setData] = useState(starData)
    const [data2, setData2] = useState([0,1])
    const [filtred, setFiltred] = useState("hide")
    const [plHolder, setPlHolder] = useState("Choose one specie")

    return(
        <main>
            <section>
                <form>
                    <input list="movies" placeholder={plHolder} onChange={(e)=>{
                        const ref = reverseList(e.target.value, listOfSpecies)
                        const newData = starData.filter((element)=> element.species.includes(ref))
                        setData(newData)
                        setPlHolder(e.target.value)
                        e.target.value = ""
                    } } />
                    <datalist id="movies">
                        {Object.values(listOfSpecies).map((element)=> <option>{element}</option>)}
                    </datalist>
                    <input type="submit" value="Send" onClick={(e)=>{
                        e.preventDefault()
                        setFiltred("")
                        setData2(data)
                        console.log()
                    }}></input>
                </form>
            </section>
            <section className={filtred}>
                <CardContainer data={data2}/>
            </section>

        </main>
    )

}

export default Specie