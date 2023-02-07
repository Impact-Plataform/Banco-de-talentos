import { Flex, Button } from "@chakra-ui/react"
import { useState } from "react"
import { MenuNav } from "../../components/MenuNav"
import {  RenderAllCharacters } from "../../components/RenderAllCharacters"
import { SpinnerComponent } from "../../components/SpinnerComponent"
import { useApi } from "../../contexts/ApiProvider"

export const People = () => {

    const {previousPage, nextPage, getCharacters, page, loading} = useApi()
    const [isDisabled, setIsDisabled] = useState(true)

    return (
        <Flex alignItems={'center'} direction={'column'} w={'100%'}>
        <MenuNav/>
        {loading ? <SpinnerComponent /> : <RenderAllCharacters />}
        <Flex mt="5" justify="center" mb="8" align="center">
            <Button onClick={previousPage} colorScheme={'yellow'} mr={10}>Prev Page</Button>
            <Button onClick={nextPage} colorScheme={'yellow'}>Next Page</Button>
        </Flex>
        </Flex>
    )
}