import { Link } from "react-router-dom"

export const CardLi = ({dados}) =>   {
    return (
        
        <li key={dados.url}>
            <Link to={`/details/${String(dados.url).split("/")[5]}`/* FUNÇÃO PARA PEGAR O IF */}><div className="card"><h1>{dados.name}</h1>
                <p>Aniversário :{dados.birth_year}</p>
                <p>Gênero : {dados.gender}</p>
            </div></Link>
        </li>
    
    )
}