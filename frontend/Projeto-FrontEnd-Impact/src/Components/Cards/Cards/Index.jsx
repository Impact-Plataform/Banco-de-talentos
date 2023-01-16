import { StyledCardUl } from "./Style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "../../Button/Index";

export const Cards = () => {

    const [page, atPage] = useState(1); // PAGE PARA CRIAR PAGINAÇÃO. 
    const [people, setPeople] = useState([]); // ATRIBUR A API UM ESTADO
    const [loading, setLoading] = useState(false); // CRIAR LOADING NA PAGE
    const [genero, setGenero] = useState([]); // SET O GENERO PARA FILTRAR

    const Genero = people.filter(people => (people?.gender == `${genero}`)); // FILTRA POR GENERO

    const showMore = () => { // SHOWMORE FUNÇÃO PARA INVOCAR A API QUANDO CLICAR NO BOTÃO. 
        console.log("clicando")
        atPage(page + 1)
      }

      const getApi = async () => {


        setLoading(true)
        try {
            let res = await fetch(`https://swapi.dev/api/people/?page=${page}`)
            let data = await res.json()
            setPeople([...people, ...data.results])
            setLoading(false)
        } 
        catch (error) {
      console.log(error)
    }
  }

  // GERA UM MAP DOS ITENS DO ARRAY RETORNADO OS DADOS DELES. 
  const Cardpeople =   people.map(people => {
    return (
        
        <li key={people?.url}>
            <Link to={`/details/${String(people.url).split("/")[5]}`/* FUNÇÃO PARA PEGAR O IF */}><div className="card"><h1>{people?.name}</h1>
                <p>Aniversário :{people?.birth_year}</p>
                <p>Gênero : {people?.gender}</p>
            </div></Link>
        </li>
    
    )
})

 const CardGenero = Genero.map(people => { // GERA UM ARRAI DE GENEROS
        return ( <li key={people?.url}>
              <Link to={`/details/${String(people.url).split("/")[5]}`}><div className="card"><h1>{people?.name}</h1>
                  <p>Aniversário :{people?.birth_year}</p>
                  <p>Gênero : {people?.gender}</p>
              </div></Link>
          </li>)
  })

const Filtered = e  => { // PREVINIR O RECARREGAMENTO DE TELA
  e.preventDefault();
 }

useEffect(() => {
    getApi()
  }, [page])

    return ( 
      <StyledCardUl>
        
        {
          loading ?
          
        <ClipLoader
        color={"  #00d9ff"}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

          :
        <StyledCardUl>
        <form onSubmit={Filtered}>
        <select name="Genero" value={genero} onChange={text => setGenero(text.target.value)}>
                <option  value="male">Male</option>
                <option value="female">Female</option>
                <option value="n/a">N/A</option>
        </select>
        <button type="submit">Enviar</button>
        </form>
        <ul>
        {Cardpeople}
        </ul>
        <Button onClick={showMore} titulo={"Mostrar mais"}></Button>
        </StyledCardUl>
        }
       
    </StyledCardUl>)
}







