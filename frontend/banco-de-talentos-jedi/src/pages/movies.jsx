import { useState } from "react"
import { useContext } from "react"
import CardContainer from "../components/cardcontainer"
import { Context } from "../context/context"
import movieList from "../services/movieList"
import reverseList from "../services/reverseSpecieList"

const Movies = ()=>{
    const {starData} = useContext(Context)
    const [data, setData] = useState(starData)
    const [data2, setData2] = useState([0,1])
    const [filtred, setFiltred] = useState("hide")
    const [plHolder, setPlHolder] = useState("Choose one movie")

    return(
        <main>
            <section>
                <form>
                    <input list="movies" placeholder={plHolder} onChange={(e)=>{
                        const ref = reverseList(e.target.value, movieList)
                        const newData = starData.filter((element)=> element.films.includes(ref))
                        setData(newData)
                        setPlHolder(e.target.value)
                        e.target.value = ""
                    } } />
                    <datalist id="movies">
                        <option value="Episode I: The Phantom Menace"/>
                        <option value="Episode II: Attack of the Clones"/>
                        <option value="Episode III: Revenge of the Sith"/>
                        <option value="Episode IV: A New Hope"/>
                        <option value="Episode V: The Empire Strikes Back"/>
                        <option value="Episode VI: Return of the Jedi"/>
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

export default Movies