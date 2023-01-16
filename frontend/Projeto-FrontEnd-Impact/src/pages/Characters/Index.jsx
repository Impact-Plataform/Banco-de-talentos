
import { Container } from "../../Components/Container"
import { Footer } from "../../Components/Footer/Index"
import { Form } from "../../Components/Form/Index"
import { Header } from "../../Components/Header/Index"

import { StyledCharacters } from "./style"


export const Characters = () =>{
    return(
   
    <StyledCharacters> 
        <Header/>
        <Form/>
        <Container/>
        <Footer/>
    </StyledCharacters>
   
    
    )
    }