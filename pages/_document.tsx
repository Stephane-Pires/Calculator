import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'

import { extendedTheme } from '../theme'

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <ColorModeScript
                        initialColorMode={extendedTheme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
