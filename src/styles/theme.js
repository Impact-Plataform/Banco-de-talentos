import { extendTheme, theme as ChakraTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        blue: {
            500: '#ddf4ff',
            600: '#70bff5',
            700: '#0969da'
        },
        gray: {
            300: '#f6f8fa',
            400: '#d4d4d4',
            700: '#6e7781',
            900: '#24292f'
        },
        red: {
            600: '#df1545'
        },
        green: {
            600: '#168821'
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

//'linear-gradient(180deg, rgba(82,81,84,0.9136029411764706) 0%, rgba(48,48,57,1) 35%, rgba(16,17,17,1) 100%)'