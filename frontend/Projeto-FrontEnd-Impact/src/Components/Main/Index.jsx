import { StyledMain } from "./Style"
import LogoStar from "../../assets/LStar.png"
import { Card } from "../Cards/Card/Index"
import { Link } from "react-router-dom"


export const Main = () =>{
    return(
    
    
    <StyledMain>
        
        <Link to={"/characters"}><button>START</button></Link>
    </StyledMain>
    
    )
    }