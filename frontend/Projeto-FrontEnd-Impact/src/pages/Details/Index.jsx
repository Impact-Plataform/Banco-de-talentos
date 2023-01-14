import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Header } from "../../Components/Header/Index";
import { StyledDetails } from "./Style";
import { useState } from "react";
import { useEffect } from "react";

console.log("hi lorena fora do Details")


export const Details = () => {
 // console.log("chegou aqui")

  const { id } = useParams()
 // console.log("teste : " + id)
  const [personagem, setPersonagem] = useState({})
  //console.log("teste")
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
          <div className="cardItem"></div>
          <div className="details">
            <h1>a rota é : {personagem.name}</h1>
            <span>Descricao </span>
            <span className="Info">Info</span>
            <Link to="/characters" ><button>Go back</button></Link>

          </div>
        </div>
      </StyledDetails>
    </>
  )


}