import { useContext, useEffect } from "react"
import { Context } from "../context/context"
import empire from "../assets/Empire.png"
import getCharacter from "../services/fetch"
import { useNavigate } from "react-router-dom"

const Loading = ()=>{
    const {setStarData} = useContext(Context)
    const result = []
    const nav = useNavigate()

    useEffect( ()=> {
        getCharacter("https://swapi.dev/api/people/?page=1")
        .then((response)=>{
            if(!result.includes(response.data.results[0])){
                result.push(...response.data.results)
            }
            getCharacter("https://swapi.dev/api/people/?page=2")
            .then((response)=>{
                result.push(...response.data.results)
                getCharacter("https://swapi.dev/api/people/?page=3")
                .then((response)=>{
                    result.push(...response.data.results)
                    getCharacter("https://swapi.dev/api/people/?page=4")
                    .then((response)=>{
                        result.push(...response.data.results)
                        getCharacter("https://swapi.dev/api/people/?page=5")
                        .then((response)=>{
                            result.push(...response.data.results)
                            getCharacter("https://swapi.dev/api/people/?page=6")
                            .then((response)=>{
                                result.push(...response.data.results)
                                getCharacter("https://swapi.dev/api/people/?page=7")
                                .then((response)=>{
                                    result.push(...response.data.results)
                                    getCharacter("https://swapi.dev/api/people/?page=8")
                                    .then((response)=>{
                                        result.push(...response.data.results)
                                        getCharacter("https://swapi.dev/api/people/?page=9")
                                        .then((response)=>{
                                            result.push(...response.data.results)
                                            let sorted = result.sort((a,b)=> a.name < b.name ? -1 : a.name > b.name ? 1: 0)
                                            setStarData(sorted)
                                            nav("/characters")
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
        
    } , [])


    return (
        <div className="loading">
            <h1>$ The Force Will Soon Be With You $</h1><br></br>
            <img className="loadingAnimation" src={empire}></img>
        </div>
    )
}

export default Loading