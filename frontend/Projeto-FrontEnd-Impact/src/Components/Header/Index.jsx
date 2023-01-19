import { Button } from "../Button/Index"
import { StyledHeader } from "./style"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { FcWikipedia } from "react-icons/fc"
export const Header = () => {
    return (


        <StyledHeader>

            <a href="https://www.linkedin.com/in/marlon-alvss/"><button className="a__button"> Star Wars {<FcWikipedia />} </button> </a>
            <a href="https://www.linkedin.com/in/marlon-alvss/"><button className="a__button">API {<FcWikipedia />} </button></a>
            <a href="https://www.linkedin.com/in/marlon-alvss/"><button className="a__button">Marlon Alves {<AiFillLinkedin />} </button></a>
            <a href="https://www.linkedin.com/in/marlon-alvss/"><button className="a__button">GitHub {<AiFillGithub />} </button></a>
        </StyledHeader>

    )
}