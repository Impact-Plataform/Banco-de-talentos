import { StyledCardUl } from "./Style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "../../Button/Index";
import { GetPeople } from "../../../services/Api";

export const Cards = () => {

    const [page, atPage] = useState(1); // PAGE PARA CRIAR PAGINAÇÃO. 
    const [people, setPeople] = useState([]); // ATRIBUR A API UM ESTADO
    const [loading, setLoading] = useState(false); // CRIAR LOADING NA PAGE
    const [genero, setGenero] = useState([]); // SET O GENERO PARA FILTRAR


    const showMore = () => { // SHOWMORE FUNÇÃO PARA INVOCAR A API QUANDO CLICAR NO BOTÃO. 
        console.log("clicando")
        atPage(page + 1)
      }


  useEffect(() => {
    getPeoples()
  }, [page])

    async function getPeoples(){
      setLoading(true)
        try{
            const response = await GetPeople(page)
            let data = response
            setPeople([...people, ...data.results])
            setLoading(false)
        }catch(e){
            console.log(e)
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
        <ul>
        {Cardpeople}
        </ul>
        <Button onClick={showMore} titulo={"Mostrar mais"}></Button>
        </StyledCardUl>
        }
       
    </StyledCardUl>)


const Genero = people.filter(people => (people?.gender == `${genero}`)); // FILTRA POR GENERO


}







