import { Flex, Button } from "@chakra-ui/react"
import { MenuNav } from "../../components/MenuNav"
import {  RenderAllCharacters } from "../../components/RenderAllCharacters"
import { useApi } from "../../contexts/ApiProvider"

export const People = () => {

    const {previousPage, nextPage} = useApi()

    return (
        <Flex alignItems={'center'} direction={'column'} w={'100%'}>
        <MenuNav/>
        <RenderAllCharacters/>
        <Flex mt="5" justify="center" mb="8" align="center">
            <Button onClick={previousPage} mr={10} colorScheme={'yellow'}>Prev Page</Button>
            <Button onClick={nextPage} colorScheme={'yellow'}>Next Page</Button>
        </Flex>
        </Flex>
    )
}