import { useApi } from "../../contexts/ApiProvider";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

export const RadioComponent = ({ allPeople, setFilteredCharacters }) => {
  const { selectedGender, setSelectedGender } = useApi();

  return (
    <RadioGroup onChange={setSelectedGender} value={selectedGender}>
      <Stack direction={["column", "column", "column", "row"]}>
        <Radio colorScheme={"yellow"} value="">
          Sem Filtro
        </Radio>
        <Radio colorScheme={"yellow"} value="female">
          Female
        </Radio>
        <Radio colorScheme={"yellow"} value="male">
          Male
        </Radio>
        <Radio colorScheme={"yellow"} value="hermaphrodite">
          Hermafrodita
        </Radio>
      </Stack>
    </RadioGroup>
  );
};
