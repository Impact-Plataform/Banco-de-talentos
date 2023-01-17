import { GetFilms, GetSpecies } from "../../services/Api";
import { StyledForm } from "./Style"
import { useEffect, useState } from "react";
import { Button } from "../Button/Index";




export const Form = () => {



// REQUISIÇÃO DOS FILMES //
const [filmes, setFilmes] = useState([]); // ATRIBUR A API UM ESTADO



useEffect(() => {
  getFilmes()
  getEspecies()
}, [])

  async function getFilmes(){
      try{
          const response = await GetFilms()
          let data = response
          setFilmes([...filmes, ...data.results])
          console.log(filmes)
      }catch(e){
          console.log(e)
      }
  }


  const CardFilmes =   filmes.map(filmes => {
    return (
        
       <option key={filmes.title}>{filmes.title}</option>
    
    )
})

// -------------- // --------------------- // ---------------- // 

const [especies, setEspecies] = useState([]); // ATRIBUR A API UM ESTADO

  async function getEspecies(){
      try{
          const response = await GetSpecies()
          let data = response
          setEspecies([...especies, ...data.results])
          console.log(especies)
      }catch(e){
          console.log(e)
      }
  }


  const CardEspecies =   especies.map(especies => {
    return (
        
       <option >{especies.name}</option>
    
    )
})

// --------------------------------------- //



  return (
    <StyledForm>
      <form method="post" action="">
        <select name="Filtros">
          <optgroup label="Gênero">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="n/a">N/A</option>
          </optgroup>
          <optgroup label="Filmes">
            {CardFilmes}
          </optgroup>
          <optgroup label="Especies">
            {CardEspecies}
          </optgroup>
          
        </select>
        <input type="submit" value="Enviar" />
        <input type="text" placeholder="Filtrar ou buscar nome" />

        <input type="reset" value="Cancelar" />
      </form>
    </StyledForm>

  )
}

