import { evaluate } from 'mathjs'
import { CalculatorContext } from 'pages'
import { useCallback, useContext, useEffect, useReducer } from 'react'

import { BUTTON_DESCRIPTOR, getKeyInfoFromValue } from '@utils/calculator'

import { Grid, GridItem, Input, useColorModeValue } from '@chakra-ui/react'

import {
    ACTION_KEYS_VALUES,
    getIDKeyFromValue,
    KEYS,
    OPERATIONS_KEYS_VALUES,
} from '../utils/key'
import { CalculatorButton } from './calculator-button'

const INITIAL_STATE = { calcul: '', error: false, last_calc: null }

const ACTION = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    RESET: 'RESET',
    COMPUTE: 'COMPUTE',
}

// Handle the calculator STATE
// Remember a reducer must be PURE ;)
function reducer(state, action) {
    console.log('action', action)
    switch (action.type) {
        case ACTION.ADD:
            return {
                ...state,
                error: false,
                calcul: state.calcul + action.payload,
            }
        case ACTION.DELETE:
            return {
                ...state,
                error: false,
                calcul: state.calcul.slice(0, -1),
            }
        case ACTION.RESET:
            return INITIAL_STATE
        case ACTION.COMPUTE:
            try {
                let computation = String(evaluate(state.calcul))

                return {
                    ...state,
                    last_calc: state.calcul,
                    calcul: computation,
                }
            } catch {
                return {
                    ...state,
                    error: true,
                }
            }

        default:
            throw new Error(
                `${action.type} does not belong to the calculator ACTION.`
            )
    }
}

function Calculator() {
    const [{ calcul, error, last_calc }, dispatch] = useReducer(
        reducer,
        INITIAL_STATE
    )

    const { setHistory } = useContext(CalculatorContext)

    const calculator_color_mode = useColorModeValue(
        'calculator_light',
        'calculator_dark'
    )

    // Handle a CLICK in a "CalculatorButton"
    const handleClick = useCallback(({ target: { value } }) => {
        console.log('Click on Button', value)
        if (KEYS.RESET === value) return dispatch({ type: ACTION.RESET })

        if (KEYS.EGAL === value) return dispatch({ type: ACTION.COMPUTE })

        if (OPERATIONS_KEYS_VALUES.includes(value))
            dispatch({
                type: ACTION.ADD,
                payload: value,
            })
    }, [])

    // Happend the history with the last_calc
    useEffect(() => {
        if (last_calc) setHistory((prevHistory) => [...prevHistory, last_calc])
    }, [last_calc, setHistory])

    // Handle the key pressed that haven't a "physical" representation on the calculator
    useEffect(() => {
        const handleOnKeyDown = ({ key }) => {
            if (ACTION_KEYS_VALUES.includes(key)) {
                switch (key) {
                    case KEYS.BACKSPACE:
                        return dispatch({ type: ACTION.DELETE })
                    case KEYS.ENTER:
                        return dispatch({ type: ACTION.COMPUTE })

                    default:
                }
            }
        }

        document.addEventListener('keydown', handleOnKeyDown)

        return () => {
            document.removeEventListener('keydown', handleOnKeyDown)
        }
    }, [])

    return (
        <Grid
            h="700px"
            w="500px"
            gridTemplateAreas={`'SCREEN SCREEN SCREEN SCREEN' 'SCREEN SCREEN SCREEN SCREEN' 'PLUS MINUS MULTIPLY DIVIDE' 'SEVEN HEIGHT NINE .' 'FOUR FIVE SIX RESET' 'ONE TWO THREE EGAL' 'ZERO ZERO POINT EGAL'`}
            templateRows={{
                base: 'repeat(7, 1fr)',
            }}
            templateColumns={{
                base: 'repeat(4, 1fr)',
            }}
            bg={`${calculator_color_mode}.background`}
            rounded="md"
            boxShadow="md"
            p={5}
            border="3px"
            borderStyle="ridge"
            borderColor={`${calculator_color_mode}.border`}
        >
            <GridItem
                margin={1}
                bg={`${calculator_color_mode}.screen`}
                area="SCREEN"
            >
                <Input
                    isReadOnly={true}
                    isInvalid={error}
                    errorBorderColor="crimson"
                    focusBorderColor="blue.500"
                    value={calcul}
                    onChange={handleClick}
                    border="4px"
                    color="white"
                    height="100%"
                    fontSize="4xl"
                />
            </GridItem>
            <BuildGridItem handleClick={handleClick} />
        </Grid>
    )
}

function BuildGridItem({ handleClick }) {
    const calculator_color_mode = useColorModeValue(
        'calculator_light',
        'calculator_dark'
    )

    return (
        <>
            {BUTTON_DESCRIPTOR.map((array) =>
                array.map((keyValue) => {
                    //TODO : Find a better way to handle thoses CSSproperties
                    const { icon, bg, area, color } =
                        getKeyInfoFromValue(keyValue)

                    return (
                        <GridItem
                            margin={1}
                            area={area}
                            key={getIDKeyFromValue(keyValue)}
                        >
                            <CalculatorButton
                                key={getIDKeyFromValue(keyValue)}
                                id={getIDKeyFromValue(keyValue)}
                                onClick={handleClick}
                                icon={icon}
                                value={keyValue}
                                bg={`${calculator_color_mode}.${bg}`}
                                color={`${calculator_color_mode}.${color}`}
                            />
                        </GridItem>
                    )
                })
            )}
        </>
    )
}

export default Calculator
