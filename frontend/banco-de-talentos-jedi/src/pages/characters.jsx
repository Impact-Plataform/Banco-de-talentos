import { useState } from "react"
import { useEffect } from "react"
import CardContainer from "../components/cardcontainer.jsx"
import getCharacter from "../services/fetch.js"
import empire from "../assets/Empire.png"
import filterCharacter from "../services/filter.js"


export function Characters(){
    const [data , setData] = useState([])
    const [loading , setLoading] = useState("loading")
    const [main , setMain] = useState("hide")
    const [page, setPage] = useState(2)
    const [filter, setFilter] = useState("hide")
    const [filtered, setFiltered] = useState([])
    var result = []

    function moreCharacters(){
        if(page <= 9){
            setLoading("loading")
            getCharacter(`https://swapi.dev/api/people/?page=${page}`)
            .then((response) => {
                result = [...data,  ...response.data.results]
                setData(result)
                setPage(page+1)
                setLoading("hide")
            }
            )
        }else{
            alert("você já está vendo todos os personagens da Saga Star Wars")
        }
    }

    useEffect( ()=> {
        getCharacter("https://swapi.dev/api/people/?page=1")
        .then((response)=>{
            result.push(...response.data.results)
            setData(result)
            setLoading("hide")
            setMain("")
        })
        
    } , [])

    return (
        <main>
        <div className={loading}>
            <h1>$ The Force Will Soon Be With You $</h1>
            <img className="loadingAnimation" src={empire}></img>
        </div>
        <section className={main}>
            <CardContainer data={data} click={moreCharacters}/>
        </section>
        <section>
            <h3> Filter Character by: </h3> <nav> </nav>
        </section>
        </main>
    )
}