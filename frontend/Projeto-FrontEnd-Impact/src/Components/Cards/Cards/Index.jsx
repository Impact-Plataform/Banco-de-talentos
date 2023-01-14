import { StyledCardUl } from "./Style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/Api";

export const Cards = () => {


    const [people, setPeople] = useState([])


    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setPeople(data.results)
            })


    }, [])

    return (

        <StyledCardUl>{
            people.map(people => {
                return (
                    <li key={people?.url}>
                       { /* console.log("id :" + String(people.url).split("/")[5]) */}
                        <Link to={`/details/${String(people.url).split("/")[5]}`}><div className="card"><h1>Gender: {people?.gender}</h1>
                            <p>Planeta :{people?.homeworld}</p>
                            <p>Pagina : {people?.url}</p>
                        </div></Link>
                        <span>Nome: {people?.name}</span>

                    </li>

                )
            })

        }

        </StyledCardUl>

    )
}







