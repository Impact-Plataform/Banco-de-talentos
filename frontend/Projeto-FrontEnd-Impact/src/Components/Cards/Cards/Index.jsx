import { StyledCardUl } from "./Style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "../../Button/Index";
import { GetPeople } from "../../../services/Api";
import { CardLi } from "../CardLi/Index";



export const Cards = ({ ReceiveDados }) => {
  console.log("Esse aqui é o savedados")
  console.log(ReceiveDados)
  const [page, atPage] = useState(1); // PAGE PARA CRIAR PAGINAÇÃO. 
  const [people, setPeople] = useState([]); // ATRIBUR A API UM ESTADO
  const [loading, setLoading] = useState(false); // CRIAR LOADING NA PAGE


useEffect(() => {
    getPeoples()
  }, [page])

  const showMore = () => { // SHOWMORE FUNÇÃO PARA INVOCAR A API QUANDO CLICAR NO BOTÃO. 
    atPage(page + 1)}

  async function getPeoples() {
    setLoading(true)
    try {
      const response = await GetPeople(page)
      let data = response
      setPeople([...people, ...data.results])
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  const Cardpeople = people.map(people => {
    return (

      <CardLi dados={people} />
    )
  })

  return (
    <StyledCardUl>

      {
        loading ?

          <ClipLoader
            color={"  #00d9ff"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

          :

          <StyledCardUl>
            <ul>
              {Cardpeople}
            </ul>
            <Button onClick={showMore} titulo={"Mostrar mais"}></Button>
          </StyledCardUl>
      }
    </StyledCardUl>)

}







