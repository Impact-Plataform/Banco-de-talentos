
import { Container } from "../../Components/Container"
import { Footer } from "../../Components/Footer/Index"
import { Header } from "../../Components/Header/Index"

import { StyledCharacters } from "./style"


export const Characters = () =>{
    return(
   
    <StyledCharacters> 
        <Header/>
        <Container/>
        <Footer/>
    </StyledCharacters>
   
    
    )
    }