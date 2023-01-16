import { Button } from "../Button/Index"
import { StyledHeader } from "./style"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { FcWikipedia } from "react-icons/fc"
export const Header = () =>{
    return(
    
    
    <StyledHeader>
    
        <a href="https://www.linkedin.com/in/marlon-alvss/"><button className="botoesAncora"> Star Wars {<FcWikipedia/>} </button> </a> 
        <a href="https://www.linkedin.com/in/marlon-alvss/"><button className="botoesAncora">API {<FcWikipedia/>} </button></a>
        <a href="https://www.linkedin.com/in/marlon-alvss/"><button className="botoesAncora">Marlon Alves {<AiFillLinkedin/>} </button></a>
        <a href="https://www.linkedin.com/in/marlon-alvss/"><button className="botoesAncora">GitHub {<AiFillGithub/>} </button></a>
    </StyledHeader>
    
    )
    }