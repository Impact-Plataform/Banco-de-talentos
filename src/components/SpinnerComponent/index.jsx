import { Spinner } from "@chakra-ui/react";

export const SpinnerComponent = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="yellow.600"
      color="blue.500"
      size="xl"
      mt={25}
    />
  );
};
