import { StyledCard } from "./style"
import { Link } from "react-router-dom"
import sabre from "../../../assets/sabre.png"



export const Card = () =>{
    return(
    
        <StyledCard>
            <div className="card">
            <div className="circle">
                <div className="textoabertura">
                    <h2>Star Wars</h2>
                    <p>Seja muito bem vindo! <br/>
                        Ao clicar no botão sera exibido um catalago de 
                        personagens do filme Star Wars contendo suas informações. 
                        <br/>Para vizualização basta clicar em consultar!
                    </p>
                    <Link to="/characters"><button className="botaoExplorar">Consultar</button></Link>
                </div>
            </div>
            <img src={sabre} alt="sabre"/>
        </div>
        </StyledCard>
    
    )
    }