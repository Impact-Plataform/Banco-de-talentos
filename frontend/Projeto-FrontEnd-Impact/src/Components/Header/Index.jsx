import { StyledHeader } from "./style.jsx"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { FcWikipedia } from "react-icons/fc"
export const Header = () => {
    return (


        <StyledHeader>

            <a href="https://pt.wikipedia.org/wiki/Star_Wars"><button className="a__button"> Star Wars {<FcWikipedia />} </button> </a>
            <a href="https://pt.wikipedia.org/wiki/Interface_de_programa%C3%A7%C3%A3o_de_aplica%C3%A7%C3%B5es"><button className="a__button">API {<FcWikipedia />} </button></a>
            <a href="https://www.linkedin.com/in/marlon-alvss/"><button className="a__button">Marlon Alves {<AiFillLinkedin />} </button></a>
            <a href="https://github.com/Marlonalvss/"><button className="a__button">GitHub {<AiFillGithub />} </button></a>
        </StyledHeader>

    )
}