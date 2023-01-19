
import { useState } from "react"
import { Cards } from "../../Components/Cards/Cards/Index"
import { Footer } from "../../Components/Footer/Index"
import { Form } from "../../Components/Form/Index"
import { Header } from "../../Components/Header/Index"

import { StyledCharacters } from "./style"


export const Characters = () => {

    const [dados, setDados] = useState([])
    function handleUsers(user) {
        let newDados = user
        setDados(newDados)

    }

    return (

        <StyledCharacters>
            <Header />
            <Form SaveDados={handleUsers} />
            <Cards ReceiveDados={dados} />
            <Footer />
        </StyledCharacters>


    )
}