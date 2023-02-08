import {Flex, Text} from '@chakra-ui/react'
import { useApi } from '../../contexts/ApiProvider';
import { RadioComponent } from '../RadioComponent';
import { SelectComponent } from '../SelectComponent'

export const FilterComponent = () => {

    const { movies, species, setSelectedValue, setSelectedValueSpecie } = useApi();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

      const handleChangeSpecie = (event) => {
        setSelectedValueSpecie(event.target.value);
      };

    return (
        <Flex bg={'gray.700'} w={'100%'} justifyContent={'space-around'} minH={100} alignItems={'center'} direction={['column', 'column', 'column','row']}>
        <Flex alignItems={'left'} direction={'column'}>
            <Text fontSize={'xl'} fontWeight={'bold.600'}>Filmes:</Text>
            <SelectComponent
               options={movies}
               placeholder=" "
               onChange={handleChange}
             />
          
        </Flex>
        <Flex alignItems={'left'} direction={'column'} >
        <Text fontSize={'xl'} fontWeight={'bold.600'}>Espécies:</Text>
        <SelectComponent
               options={species}
               placeholder=" "
               onChange={handleChangeSpecie}
             />
        </Flex>
        <Flex alignItems={'left'} direction={'column'}>
            <Text fontSize={'xl'} fontWeight={'bold.600'}>Genero: </Text>
            <RadioComponent/>
        </Flex>
    </Flex>
    )
}