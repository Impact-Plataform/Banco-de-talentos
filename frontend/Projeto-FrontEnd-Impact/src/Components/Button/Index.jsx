import { StyledButton } from "./Style.jsx"

export const Button = ({ ...props }) =>{
    return(
    
    
    
        <StyledButton onClick={props.onClick}>
            {props.titulo}
        </StyledButton>
       
    
    )
    }