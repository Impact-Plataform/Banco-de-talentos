import { StyledMain } from "./Style"
import LogoStar from "../../assets/LStar.png"
import { Card } from "../Cards/Card/Index"


export const Main = () =>{
    return(
    
    
    <StyledMain>
        <img src={LogoStar} alt="nave" className="nave" />
        <Card/>
    </StyledMain>
    
    )
    }