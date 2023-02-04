import { useApi } from "../../contexts/ApiProvider"
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

export const RadioComponent = () => {
    const {selectedGender, setSelectedGender} = useApi();

    return(
        <RadioGroup onChange={setSelectedGender} value={selectedGender}>
        <Stack direction='row'>
          <Radio colorScheme={'yellow'} value=''>First</Radio>
          <Radio colorScheme={'yellow'} value='female'>Female</Radio>
          <Radio colorScheme={'yellow'} value='male'>Male</Radio>
        </Stack>
      </RadioGroup>
    )
}