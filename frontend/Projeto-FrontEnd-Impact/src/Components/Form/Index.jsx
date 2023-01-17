import { GetFilms } from "../../services/Api";
import { StyledForm } from "./Style"
import { useEffect, useState } from "react";




export const Form = () => {

  const [filmes, setFilmes] = useState([]); // ATRIBUR A API UM ESTADO


useEffect(() => {
  getFilmes()
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
        
       <option>{filmes.title}</option>
    
    )
})




  return (
    <StyledForm>
      <form method="post" action="">
        <select>
          <optgroup label="Filmes">
            {CardFilmes}
          </optgroup>
          <optgroup label="Grupo 2">
            <option>Opção 2.1</option>
            <option>Opção 2.2</option>
            <option>Opção 2.1</option>
            <option>Opção 2.2</option>
            <option>Opção 2.1</option>
            <option>Opção 2.2</option>
          </optgroup>
          <optgroup label="Grupo 3">
            <option>Opção 3.1</option>
            <option>Opção 3.2</option>
            <option>Opção 3.3</option>
            <option>Opção 3.1</option>
            <option>Opção 3.2</option>
            <option>Opção 3.3</option>
          </optgroup>
        </select>
        <input type="submit" value="Enviar" />
        <input type="text" placeholder="Nome do personagem" />

        <input type="reset" value="Cancelar" />
      </form>
    </StyledForm>

  )
}

