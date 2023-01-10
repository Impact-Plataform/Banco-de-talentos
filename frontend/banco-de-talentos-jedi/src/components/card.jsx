import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Context } from "../context/context.jsx"
import Button from "./button.jsx"
import listOfSpecies from "../services/specieList.js"
import movieList from "../services/movieList.js"

const Card = () =>{
    
    const params = useParams()
    const navigate = useNavigate()
    const {starData} = useContext(Context)
    const {name, species, height,mass, hair_color, skin_color,eye_color, birth_year, gender, films} = starData[params.index]
    const film = films.map((element)=> movieList[element])
    console.log(params)
    console.log(starData[params.index])
    if(species != 0){
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
        </div>
        </section>
        )
    }else{
        return (
        <section className="container">
            <div className="card">
            <p><b>Character name: </b> {name}</p>
            <p><b> Birth Year: </b> {birth_year}* </p>
            <p><b>Height: </b>{height} centimeters</p> 
            <p><b>Mass: </b> {mass} kilograms </p>
            <p><b>Specie: </b> Human </p>
            <p><b>Gender: </b> {gender}</p>
            <p><b>Hair Color:</b> {hair_color} </p>
            <p><b>Skin Color: </b>{skin_color}</p>
            <p><b>Eye Color: </b>{eye_color}</p>
            <p><b>Movie Appearances: </b><br></br>{film[0]}  <br></br> {film[1]} <br></br> {film[2]} <br></br> {film[3]} <br></br> {film[4]} <br></br> {film[5]} <br></br> </p>
            </div>
            <div>
                <Button label="Prev. Page" callback={()=>{
                    if(index != 0){
                        navigate(`/card/${props.index-1}`)
                    }else{
                        alert("Você está no primeiro personagem")
                    }
                    }}/>

                <Button label="Next Page" callback={()=>{
                    if(index != starData.length-1){
                        navigate(`/card/${props.index+1}`)
                    }else{
                        alert("Você está no primeiro personagem")
                    }
                    }}/>

                    <Button label="voltar para o Stardex" callback={()=> navigate("/characters")} />
            </div>
        </section>
        )
    }
}

export default Card



