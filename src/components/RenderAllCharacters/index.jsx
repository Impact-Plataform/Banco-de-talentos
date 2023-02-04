import { useApi } from "../../contexts/ApiProvider"
import { Card } from "../Card";
import { Flex } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import axios from 'axios';



export const RenderAllCharacters = () => {

    /*const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get( "https://swapi.dev/api/people/");
          setData(response.data.results);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }, []);*/

    const {characters} = useApi();

    return (
        <Flex wrap={'wrap'} justifyContent={'center'} maxW={1300}>
         {characters.map((character, index) => {
            return <Card character={character} key={index}/>
        })}
        </Flex>
    )
}