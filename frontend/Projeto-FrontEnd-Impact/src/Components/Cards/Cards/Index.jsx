import { StyledCardUl } from "./Style";
import { useEffect, useState } from "react";
import api from "../../../services/Api";

export const Cards = ()=> {

const [people, setPeople ] = useState([])
    

    useEffect(()=>{
        fetch("https://swapi.dev/api/people")
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            setPeople(data.results)})
    
    
    }, [])


    return (

        <StyledCardUl>{
            people.map( people => {
                return (
                   <li key={people?.url}>
                <a><div className="card"><h1>Gender: {people?.gender}</h1>
                <p>{people?.homeworld}</p>
                </div></a>
                <span>Nome: {people?.name}</span>
            </li>
                )
            })

            }

        </StyledCardUl>

    )
}







