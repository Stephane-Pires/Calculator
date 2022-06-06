import Head from 'next/head'

import { HStack, VStack } from '@chakra-ui/layout'

import AppLogo from './app-logo'
import { ColorModeSwitcher } from './color-mode-switcher'

export const SITE_TITLE = 'Calculator 🚀'

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Head>
                <link rel="icon" href="/images/divers/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <title>{SITE_TITLE}</title>
            </Head>
            <main>
                <HStack justifyContent="space-between" margin="1em">
                    <AppLogo />
                    <ColorModeSwitcher />
                </HStack>
                <VStack alignItems="stretch" spacing={10}>
                    {children}
                </VStack>
            </main>
        </>
    )
}
