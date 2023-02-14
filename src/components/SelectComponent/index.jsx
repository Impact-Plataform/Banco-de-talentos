import { Select } from '@chakra-ui/react';

export const SelectComponent = ({ options, placeholder, onChange }) => {

    return (
        <Select
        variant={"unstyled"}
        size={"md"}
        w={220}
        cursor={"pointer"}
        placeholder={placeholder}
        onChange={onChange}
        bg={'yellow.600'}
        mr={2}
        fontWeight={'bold'}
      >
        {options.map((option) => (
          <option
            key={option.name || option.title}
            value={option.name || option.title}
            style={{ color: "black" }}
            color={"gray.700"}
          >
            {option.name || option.title}
          </option>
        ))}
      </Select>
  
    )
}