import { Container, Movie, MovieList } from "./style";
import { Link } from "react-router-dom";


function HOME() {
    

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                    <Movie key="">
                        <Link to=""> <div className="card"></div></Link>
                    <span></span>
                    </Movie>
             
            </MovieList>
        </Container>
    )
}

export default HOME;