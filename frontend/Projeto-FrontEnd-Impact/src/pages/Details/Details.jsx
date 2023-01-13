import { Header } from "../../Components/Header/Index";
import { StyledDetails } from "./Style";



export const Details = ()=>{



return (
  <>
<Header/>
 <StyledDetails>
        <div className="cardG">
            <div className="cardItem"></div>
            <div className="details">
                <h1>Teste Titulo</h1>
                <span>Descricao</span>
                <span className="Info">Info</span>
                <a to="/" ><button>Go back</button></a>
                
            </div>
        </div>
    </StyledDetails>
   </> 
)


}

export default Details;