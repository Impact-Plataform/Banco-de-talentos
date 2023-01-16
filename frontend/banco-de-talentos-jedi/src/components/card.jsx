import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Context } from "../context/context.jsx"
import Button from "./button.jsx"
import listOfSpecies from "../services/specieList.js"
import movieList from "../services/movieList.js"
import { useEffect } from "react"

const Card = () =>{
    
    const params = useParams()
    const navigate = useNavigate()
    const {starData} = useContext(Context)
    const data = starData.filter((element)=> element.id == params.index)
    let {name, species, height,mass, hair_color, skin_color,eye_color, birth_year, gender, films} = data[0]
    const film = films.map((element)=> movieList[element])
    if(species == 0){
        species = "https://swapi.dev/api/species/1/"
    }
    return (
        <section className="container">
        <div className="card">
        <p><b>Character name: </b> {name}</p>
        <p><b> Birth Year: </b> {birth_year}* </p>
        <p><b>Height: </b>{height} centimeters</p> 
        <p><b>Mass: </b> {mass} kilograms </p>
        <p><b>Specie: </b> {listOfSpecies[species]} </p>
        <p><b>Gender: </b> {gender}</p>
        <p><b>Hair Color:</b> {hair_color} </p>
        <p><b>Skin Color: </b>{skin_color}</p>
        <p><b>Eye Color: </b>{eye_color}</p>
        <p><b>Movie Appearances: </b><br></br>{film[0]}  <br></br> {film[1]} <br></br> {film[2]} <br></br> {film[3]} <br></br> {film[4]} <br></br> {film[5]} <br></br> </p>
        <div className="divButtons">
                <Button label="Prev. Page" callback={()=>{
                    if(params.index != 0){
                        navigate(`/card/${params.index-1}`)
                    }else{
                        alert("Você está no primeiro personagem")
                    }
                    }}/>

                <Button label="Stardex" callback={()=> navigate("/characters")} />

                <Button label="Next Page" callback={()=>{
                    if(params.index != starData.length-1){
                        navigate(`/card/${Number(params.index)+1}`)
                    }else{
                        alert("Você está no último personagem")
                    }
                    }}/>
            </div>
        </div>
        </section>
        )
}

export default Card



