'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { PropsWithChildren } from 'react';
import { theme } from '../../styles/theme';


export default function CustomChakraProvider({ children }: PropsWithChildren) {
  return(
    <ChakraProvider theme={theme}>
      { children }
    </ChakraProvider>
  );
};
