import { useEffect, useRef, useState } from 'react'

import { Button, Text, useColorModeValue } from '@chakra-ui/react'

import { KEYS } from '../utils/key'

interface Props {
    icon: string
    bg: string
    onClick: any
    value: string
    id: string
    color: string
}

export function CalculatorButton({
    icon,
    bg,
    onClick,
    value,
    id,
    color,
}: Props) {
    const buttonRef = useRef(null)

    const calculator_color_mode = useColorModeValue(
        'calculator_light',
        'calculator_dark'
    )

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

    return (
        <Button
            className="active"
            ref={buttonRef}
            w="100%"
            h="100%"
            bg={active ? `${calculator_color_mode}.active` : bg}
            color={color}
            boxShadow="md"
            _hover={{ bg: `${calculator_color_mode}.hover` }}
            _active={{
                bg: `${calculator_color_mode}.active`,
                transform: 'scale(0.85)',
            }}
            onClick={onClick}
            value={value}
            transform={active ? 'scale(0.85)' : null}
            fontSize="xl"
        >
            {icon}
        </Button>
    )
}
