import { extendTheme, theme as ChakraTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            300: '#f6f8fa',
            400: '#d4d4d4',
            700: '#6e7781',
            900: '#24292f'
        },
        fonts: {
            headings:'Poppins',
            body: 'Poppins'
        },
        fontSizes: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            32: '8rem',
        },
        
    },
    styles: {
        global: {
            'html, body': {
                color: 'gray.200',
                bg: '#1F1C1C',
                fontFamily: 'Poppins'
              }
        }
    }
})
