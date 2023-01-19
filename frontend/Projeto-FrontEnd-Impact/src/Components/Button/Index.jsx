import { StyledButton } from "./Style.jsx"

export const Button = ({ ...props }) => {
    return (



        <StyledButton backgroundColor={props.backgroundColor}
            width={props.width}
            margintop={props.margintop}
            marginbottom={props.marginbottom}
            border={props.border}
            onClick={props.onClick}>
            {props.titulo}

        </StyledButton>


    )
}