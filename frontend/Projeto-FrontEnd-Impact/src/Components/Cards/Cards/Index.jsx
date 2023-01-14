import { StyledCardUl } from "./Style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/Api";

export const Cards = () => {

    const [page, atPage] = useState(1)
    const [people, setPeople] = useState([])

    const showMore = () => {
        atPage(page + 1)
      }

      const getApi = async () => {

        try {
            let res = await fetch(`https://swapi.dev/api/people/?page=${page}`)
            let data = await res.json()
            setPeople([...people, ...data.results])
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
        <>
        <StyledCardUl>
        {Cardpeople}
        </StyledCardUl>
        <button onClick={showMore}>Mostre mais</button>
    </>)
}







