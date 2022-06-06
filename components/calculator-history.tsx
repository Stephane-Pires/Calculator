import { CalculatorContext } from 'pages'
import { useCallback, useContext, useMemo } from 'react'

import { Button, ListItem, OrderedList, VStack } from '@chakra-ui/react'

export function CalculatorHistory() {
    const { history, setHistory } = useContext(CalculatorContext)

    const handleOnClick = useCallback(() => {
        setHistory([])
    }, [setHistory])

    const buildedList = useMemo(() => {
        return (
            <OrderedList paddingLeft={10}>
                {history.map((entry) => (
                    <ListItem key={entry}>{` : ${entry}`}</ListItem>
                ))}
            </OrderedList>
        )
    }, [history])

    return (
        <VStack>
            <VStack
                overflowY="auto"
                overflowX="auto"
                maxHeight="700px"
                height="700px"
                width="300px"
                padding={10}
            >
                {buildedList}
            </VStack>
            <Button onClick={handleOnClick}>Reset</Button>
        </VStack>
    )
}
