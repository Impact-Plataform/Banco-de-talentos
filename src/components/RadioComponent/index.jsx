import { useApi } from "../../contexts/ApiProvider"
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

export const RadioComponent = ({allPeople, setFilteredCharacters}) => {
    const {selectedGender, setSelectedGender} = useApi();

    /*const handleChangeGender = (event) => {
        setSelectedGender(event.target.value);
        setFilteredCharacters(allPeople.filter((character) => character.gender === event.target.value));
    };*/

    return(
        <RadioGroup onChange={setSelectedGender} value={selectedGender}>
        <Stack direction='row'>
          <Radio colorScheme={'yellow'} value=''>Sem Filtro</Radio>
          <Radio colorScheme={'yellow'} value='female'>Female</Radio>
          <Radio colorScheme={'yellow'} value='male'>Male</Radio>
          <Radio colorScheme={'yellow'} value='hermaphrodite'>Hermafrodita</Radio>
        </Stack>
      </RadioGroup>
    )
}
/*import { useApi } from "../../contexts/ApiProvider"
export const RadioComponent = () => {
    const {selectedGender, setSelectedGender} = useApi();

    return(
        <div>
      

        <div>
          <input
            type="radio"
            id="male"
            value="male"
            checked={selectedGender === "male"}
            onChange={(e) => setSelectedGender(e.target.value)}
          />
          <label htmlFor="male">Male</label>
        
          <input
            type="radio"
            id="female"
            value="female"
            checked={selectedGender === "female"}
            onChange={(e) => setSelectedGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>
        
          <input
            type="radio"
            id="unkown"
            value="n/a"
            checked={selectedGender === "n/a"}
            onChange={(e) => setSelectedGender(e.target.value)}
          />
          <label htmlFor="female">Unkown</label>
        
          <input
            type="radio"
            id="all"
            value=""
            checked={!selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          />
          <label htmlFor="all">All</label>
    
        
        </div>
        </div>
    )
}*/
