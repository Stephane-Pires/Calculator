import { useEffect, useRef, useState } from 'react'

import {
    Button,
    ComponentStyleConfig,
    GridItem,
    useColorModeValue,
    useStyleConfig,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import { KEYS } from '../utils/key'

interface Props {
    icon: string
    onClick: any
    value: string
    id: string
    area: string
    variant: string
}

export function CalculatorButton({
    icon,
    onClick,
    value,
    id,
    area,
    variant,
}: Props) {
    const buttonRef = useRef(null)

    const [active, setActive] = useState(false)

    // Handle Press on Keyboard for CalculatorButton
    useEffect(() => {
        const handleOnKeyDown = (event) => {
            if (event.key === KEYS[id]) {
                setActive(true)
                buttonRef.current.click()
            }
        }

        const handleOnKeyUp = (event) => {
            if (event.key === KEYS[id]) {
                setActive(false)
            }
        }

        document.addEventListener('keydown', handleOnKeyDown)
        document.addEventListener('keyup', handleOnKeyUp)

        return () => {
            document.removeEventListener('keydown', handleOnKeyDown)
            document.removeEventListener('keyup', handleOnKeyUp)
        }
    }, [value, id])

    const styles = useStyleConfig('CalculatorButtonStyle', { variant })

    const activeBg = useColorModeValue('#b4b6ba', '#7D8391')

    return (
        <GridItem margin={1} area={area} key={id}>
            <Button
                __css={styles}
                ref={buttonRef}
                sx={
                    active && {
                        bg: activeBg,
                        transform: 'scale(0.85)',
                    }
                }
                onClick={onClick}
                value={value}
            >
                {icon}
            </Button>
        </GridItem>
    )
}

export const CalculatorButtonStyle: ComponentStyleConfig = {
    baseStyle: (props) => ({
        w: '100%',
        h: '100%',
        boxShadow: 'md',
        borderColor: mode('#000000', '#b7b7a4')(props),
        _hover: { bg: mode('#b4b6ba', '#7D8391')(props) },
        _active: {
            bg: mode('#b4b6ba', '#7D8391')(props),
            transform: 'scale(0.85)',
        },
        fontSize: 'xl',
    }),
    variants: {
        operation: (props) => ({
            color: mode('#000000', '#000000')(props),
            backgroundColor: mode('#fca311', '#e5e5e5')(props),
        }),
        number: (props) => ({
            color: mode('#000000', '#ffffff')(props),
            backgroundColor: mode('#e5e5e5', '#14213d')(props),
        }),
    },
}
