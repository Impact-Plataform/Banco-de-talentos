import { StyledCardUl } from "./Style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "../../Button/Index";

export const Cards = () => {

    const [page, atPage] = useState(1); // PAGE PARA CRIAR PAGINAÇÃO. 
    const [people, setPeople] = useState([]); // ATRIBUR A API UM ESTADO
    const [loading, setLoading] = useState(false); // CRIAR LOADING NA PAGE

    const showMore = () => {
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

  const Cardpeople =   people.map(people => {
    return (
        <li key={people?.url}>
            <Link to={`/details/${String(people.url).split("/")[5]}`}><div className="card"><h1>{people?.name}</h1>
                <p>Planeta :{people?.homeworld}</p>
                <p>Pagina : {people?.url}</p>
            </div></Link>
        </li>

    )
})

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
        <ul>
        {Cardpeople}
        </ul>
        <Button onClick={showMore} titulo={"Mostrar mais"}></Button>
        </StyledCardUl>
        }
       
    </StyledCardUl>)
}







