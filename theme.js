import { extendTheme } from '@chakra-ui/react'

import { CalculatorStyle } from './components/calculator'
import { CalculatorButtonStyle } from './components/calculator-button'

export const extendedTheme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: true,
    components: {
        CalculatorStyle,
        CalculatorButtonStyle,
    },
    semanticTokens: {
        colors: {
            screen: {
                default: '#000000',
                _dark: '#000000',
            },
        },
    },
})
