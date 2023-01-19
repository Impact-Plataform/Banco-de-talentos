import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Header } from "../../Components/Header/Index";
import { StyledDetails } from "./Style";
import { useState } from "react";
import { useEffect } from "react";
import Face from "../../assets/pngegg.png";
import { Footer } from "../../Components/Footer/Index";
import { Button } from "../../Components/Button/Index";


export const Details = () => {

  const { id } = useParams()

  const [personagem, setPersonagem] = useState({})
  const [filmes, setFilmes] = useState([])
  let nomeFilmes = []
  let filmesFiltred = []

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then(response => response.json())
      .then(data => {
        setPersonagem(data)
      })
    fetch(`https://swapi.dev/api/films`)
      .then(response => response.json())
      .then(data => {
        setFilmes(data.results)
      })

  }, [id])


  function setfilmesFiltred(filmess = filmes) {
    filmesFiltred = filmess
    if (filmesFiltred) {
      filmesFiltred = filmesFiltred.filter(filmes => filmes.characters.includes(personagem.url))
    }
  }

  setfilmesFiltred()

  nomeFilmes = (filmesFiltred.map(filmes => { return <><li><a href={filmes.url}>{filmes.title}</a></li><br /></> }))

  return (
    <>
      <Header />
      <StyledDetails>
        <div className="main__div">
          <figure>
            <img src={Face} alt="" />
          </figure>
          <section>
            <ul>
              <li> <h1>Nome: {personagem.name}</h1></li>
              <li> Altura: {personagem.height} </li>
              <li>massa: {personagem.mass}</li>
              <li>Cor do cabelo: {personagem.hair_color}</li>
              <li>Cor da Pele: {personagem.skin_color}</li>
              <li>Cor dos olhos: {personagem.eye_color}</li>
              <li>Aniversário: {personagem.birth_year}</li><br />
              <li>Filmes :
                {nomeFilmes}</li><br />
            </ul>
            <Link to="/characters" ><Button titulo={"Voltar"} margintop={"10px"} marginbottom={"10px"} border={"3px solid whitesmoke"} /></Link>

          </section>
        </div>
      </StyledDetails>
      <Footer />
    </>
  )


}