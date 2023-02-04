import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import { useApi } from '../../contexts/ApiProvider';
;

export const InputComponent = () => {

  const {inputValue, setInputValue, getCharacterByName} = useApi();
  
  const handleChange = (event) => setInputValue(event.target.value);

 return (
  <InputGroup w={250} >
    <Input
      type="text"
      size="sm"
      borderRadius="6"
      focusBorderColor={'yellow.500'}
      color={['gray.700', 'gray.700', "gray.700", "white"]}
      value={inputValue}
      onChange={handleChange}
      m='1'
      placeholder='Busque pelo nome'
     
    />
    <InputRightElement
      as={"button"}
      pb="1"
      borderRadius="8"
      onClick={() => getCharacterByName(1)}
      children={
        <SearchIcon
          color={"gray.600"}
          _hover={{
            color: "gray.800",
          }}
        />
      }
    />
  </InputGroup>
 )
  
};
