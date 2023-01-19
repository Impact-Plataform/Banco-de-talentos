import { StyledMain } from "./Style"
import { Link } from "react-router-dom"
import { Button } from "../Button/Index"


export const Main = () => {
    return (


        <StyledMain>

            <Link to={"/characters"}><Button titulo={"START"} /></Link>
        </StyledMain>

    )
}