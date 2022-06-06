import { createContext, useState } from 'react'

import { Center, Divider, Flex, Heading, HStack } from '@chakra-ui/layout'

import Calculator from '@components/calculator'
import { CalculatorHistory } from '@components/calculator-history'
import Layout from '@components/layout'

export const CalculatorContext = createContext({
    history: [],
    setHistory: null,
})

export default function IndexPage() {
    const [history, setHistory] = useState([])

    return (
        <Layout>
            <Center>
                <Flex direction="column">
                    <Heading fontWeight="extrabold" size="xl">
                        Calculator
                    </Heading>
                    <Divider />
                </Flex>
            </Center>
            <Center>
                <CalculatorContext.Provider value={{ history, setHistory }}>
                    <HStack spacing="40">
                        <Calculator />
                        <CalculatorHistory />
                    </HStack>
                </CalculatorContext.Provider>
            </Center>
        </Layout>
    )
}
