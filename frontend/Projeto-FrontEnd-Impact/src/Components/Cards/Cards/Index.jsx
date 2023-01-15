import { StyledCardUl } from "./Style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export const Cards = () => {

    const [page, atPage] = useState(1);
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(false);

    const showMore = () => {
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
            <Link to={`/details/${String(people.url).split("/")[5]}`}><div className="card"><h1>Gender: {people?.gender}</h1>
                <p>Planeta :{people?.homeworld}</p>
                <p>Pagina : {people?.url}</p>
            </div></Link>
            <span>Nome: {people?.name}</span>

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
        color={"#36d7b7"}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

          :
        <>
        {Cardpeople}
        <button onClick={showMore}>Mostre mais</button>
        </>
        }
       
    </StyledCardUl>)
}







