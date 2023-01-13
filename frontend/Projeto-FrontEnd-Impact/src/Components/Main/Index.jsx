import { StyledMain } from "./Style"
import LogoStar from "../../assets/LStar.png"
import { Card } from "../Cards/Cards"

export const Main = () =>{
    return(
    
    
    <StyledMain>
        <img src={LogoStar} alt="nave" className="nave" />
        <Card/>
    </StyledMain>
    
    )
    }