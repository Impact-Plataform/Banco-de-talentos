import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Header } from "../../Components/Header/Index";
import { StyledDetails } from "./Style";
import { useState } from "react";
import { useEffect } from "react";
import Face from "../../assets/pngegg.png";

console.log("hi lorena fora do Details")


export const Details = () => {


  const { id } = useParams()

  const [personagem, setPersonagem] = useState({})

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPersonagem(data)
      } )


  }, [id])


  return (
    <>
      <Header />
      <StyledDetails>
        <div className="cardG">
          <div className="cardItem">
            <img src={Face} alt="" />
            </div>
          <div className="details">
            <ul>
              <li> <h1>Nome: {personagem.name}</h1></li>
              <li> Altura: {personagem.height} </li>
              <li>massa: {personagem.mass}</li>
              <li>Cor do cabelo: {personagem.hair_color}</li> 
              <li>Cor da Pele: {personagem.skin_color}</li>
              <li>Cor dos olhos: {personagem.eye_color}</li>
              <li>Aniversário: {personagem.birth_year}</li><br/>
              <li>Filmes : <a href={`https://swapi.dev/api/people/${id}`}>{personagem.films}</a></li><br/>
              <li>Naves estelares: <a href={personagem.starships}>{personagem.starships}</a></li>
            </ul>
            <Link to="/characters" ><button>Go back</button></Link>

          </div>
        </div>
      </StyledDetails>
    </>
  )


}