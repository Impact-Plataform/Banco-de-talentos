'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { PropsWithChildren } from 'react';


export default function CustomChakraProvider({ children }: PropsWithChildren) {
  return(
    <ChakraProvider>
      { children }
    </ChakraProvider>
  );
};
