import { StyledMain } from "./Style.jsx"
import { Link } from "react-router-dom"
import { Button } from "../Button/Index.jsx"


export const Main = () => {
    return (


        <StyledMain>

            <Link to={"/characters"}><Button titulo={"START"} /></Link>
        </StyledMain>

    )
}