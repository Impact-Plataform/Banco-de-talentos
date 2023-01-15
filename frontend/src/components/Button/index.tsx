import { Container } from "./styles"
import { ButtonInterface } from "./interface"

export const Button = ({text, onClick}:ButtonInterface) => {
    return <Container onClick={onClick}>{text}</Container>
}