import { extendTheme } from '@chakra-ui/react'

export const extendedTheme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: true,
    colors: {
        calculator_light: {
            screen: '#000000',
            background: '#ffe8d6',
            hover: '#f1c47b',
            active: '#b4b6ba',
            border: '#000',
            button: {
                number: {
                    background: '#e5e5e5',
                    color: '#000000',
                },
                operation: {
                    background: '#fca311',
                    color: '#000000',
                },
            },
        },
        calculator_dark: {
            screen: '#000000',
            background: '#b7b7a4',
            hover: '#7D8391',
            active: '#7D8391',
            border: '#b7b7a4',
            button: {
                number: {
                    background: '#14213d',
                    color: '#ffffff',
                },
                operation: {
                    background: '#e5e5e5',
                    color: '#000000',
                },
            },
        },
    },
})
