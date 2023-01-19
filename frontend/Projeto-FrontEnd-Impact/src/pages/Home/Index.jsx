import { Footer } from "../../Components/Footer/Index.jsx";
import { Header } from "../../Components/Header/Index.jsx";
import { Main } from "../../Components/Main/Index.jsx";
import { StyledHome } from "./style.jsx";


export const Home = () => {
    return (


        <StyledHome>
            <Header />
            <Main />
            <Footer />
        </StyledHome>

    )
}

