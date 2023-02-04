import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme'
import { ApiProvider } from './ApiProvider';


export const AppProvider = ({children}) => (
    <ApiProvider>
        <ChakraProvider theme={theme}>{children}
        </ChakraProvider>
    </ApiProvider>
    
)