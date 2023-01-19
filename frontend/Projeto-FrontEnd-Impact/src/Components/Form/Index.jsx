import { GetFilms, GetPeople, GetSpecies } from "../../services/Api";
import { StyledForm } from "./Style"
import { useEffect, useState } from "react";
import { Button } from "../Button/Index";

export const Form = ({SaveDados}) => {

  const [dadosForm, setdadosForm] = useState("")
  const [dadosReady, setDadosReady] = ([])
 


console.log(dadosForm)
console.log(SaveDados)

 // USE EFFECT PARA ASSIM QUE RENDERIZAR MONTAR OS OPTIONS COM OS FILMES E AS ESPECIES.

  useEffect(() => {
    getFilmes()
    getEspecies()
    SaveDados(dadosForm)
    
  }, [dadosForm])


  // GET PARA FILMES 
const [filmes, setFilmes] = useState([]); // ATRIBUR A API UM ESTADO

  async function getFilmes() {
    try {
      const response = await GetFilms()
      let data = response
      setFilmes([...filmes, ...data.results])
      console.log(filmes)
    } catch (e) {
      console.log(e)
    }
  }
  const CardFilmes = filmes.map(filmes => {
    return (

      <option value={filmes.title}>{filmes.title}</option>

    )
  })

  // -------------- // --------------------- // ---------------- // 

  const [especies, setEspecies] = useState([]); // ATRIBUR A API UM ESTADO

  async function getEspecies() {
    
    try {
      const response = await GetSpecies()
      let data = response
      setEspecies([...especies, ...data.results])
      console.log(especies)
    } catch (e) {
      console.log(e)
    }
  }

  
  const CardEspecies = especies.map(especies => {
    return (

      <option
      
      value={especies.name} >{especies.name}
      </option>

    )
  })
  //-------------------------------------------------------------------//


  
  // --------------------------------------- //
  return (
    <StyledForm>
      <form  action="" onSubmit={e => e.preventDefault()}>
        <select onChange={e => setdadosForm(e.target.value)} name="Filtros">
          <optgroup label="Gênero">
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="n/a">n/a</option>
          </optgroup>
          <optgroup label="Filmes">
            {CardFilmes}
          </optgroup>
          <optgroup label="Especies">
            {CardEspecies}
          </optgroup>

        </select>
        <input type="text" placeholder="Filtrar ou buscar nome" />
        <Button  titulo={"Buscar"}></Button>
        <input type="reset" value="Cancelar" />
      </form>
    </StyledForm>
  )
}

