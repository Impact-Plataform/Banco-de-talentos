import { GetFilms, GetPeople, GetSpecies } from "../../services/Api";
import { StyledForm } from "./Style"
import { useEffect, useState } from "react";
import { Button } from "../Button/Index";

export const Form = ({ SaveDados }) => {

  const [dadosGender, setDadosGender] = useState(undefined)
  const [dadosFilms, setDadosFilms] = useState(undefined)
  const [dadosName, setDadosName] = useState(undefined)
  const [dadosSpecies, setDadosSpecies] = useState(undefined)
  

  function handleDados(){

    SaveDados([dadosGender, dadosFilms, dadosSpecies, dadosName])
  }

  function ClearAll(){
    setDadosGender(undefined)
    setDadosFilms(undefined)
    setDadosName(undefined)
    setDadosSpecies(undefined)
    window.location.reload(true)

  }

  



  // USE EFFECT PARA ASSIM QUE RENDERIZAR MONTAR OS OPTIONS COM OS FILMES E AS ESPECIES.

  useEffect(() => {
    getFilmes()
    getEspecies()
  }, [])

  // GET PARA FILMES 
  const [filmes, setFilmes] = useState([]); // ATRIBUR A API UM ESTADO

  async function getFilmes() {
    try {
      const response = await GetFilms()
      let data = response
      setFilmes([...filmes, ...data.results])
    } catch (e) {
      console.log(e)
    }
  }
  const CardFilmes = filmes.map(filmes => {
    return (

      <option value={filmes.url}>{filmes.title}</option>

    )
  })

  // -------------- // --------------------- // ---------------- // 

  const [especies, setEspecies] = useState([]); // ATRIBUR A API UM ESTADO

  async function getEspecies() {

    try {
      const response = await GetSpecies()
      let data = response
      setEspecies([...especies, ...data.results])
    } catch (e) {
      console.log(e)
    }
  }


  const CardEspecies = especies.map(especies => {
    return (

      <option

        value={especies.url} >{especies.name}
      </option>

    )
  })
  //-------------------------------------------------------------------//

  return (
    <StyledForm>
      <form action="" onSubmit={e => e.preventDefault()}>
        <select onChange={e => setDadosGender(e.target.value)} name="Filtros" label="Genêros">
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="n/a">n/a</option>
        </select>

        <select name="Filmes"  onChange={e => setDadosFilms(e.target.value)}>
          {CardFilmes}
        </select>

        <select name="Especies" onChange={e => setDadosSpecies(e.target.value)}>
          {CardEspecies}
        </select>

        <input type="text" onChange={e => setDadosName(e.target.value)} placeholder="Filtrar ou buscar nome" />
        <Button onClick={handleDados} titulo={"Buscar"}></Button>
        <input type="reset" onClick={ClearAll} value="Limpar dados" />
      </form>
    </StyledForm>
  )
  
}

