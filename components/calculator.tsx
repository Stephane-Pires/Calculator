import { evaluate } from 'mathjs'
import { CalculatorContext } from 'pages'
import { useCallback, useContext, useEffect, useReducer } from 'react'

import { BUTTON_DESCRIPTOR, getKeyInfoFromValue } from '@utils/calculator'

import { Grid, GridItem, Input, useStyleConfig } from '@chakra-ui/react'
import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { mode } from '@chakra-ui/theme-tools'

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

    // Handle a CLICK in a "CalculatorButton"
    const handleClick = useCallback((event) => {
        if (KEYS.RESET === event.target.value)
            return dispatch({ type: ACTION.RESET })

        if (KEYS.EGAL === event.target.value)
            return dispatch({ type: ACTION.COMPUTE })

        if (OPERATIONS_KEYS_VALUES.includes(event.target.value))
            dispatch({
                type: ACTION.ADD,
                payload: event.target.value,
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

    const styles = useStyleConfig('CalculatorStyle')

    return (
        <Grid __css={styles}>
            <GridItem margin={1} bg="screen" area="SCREEN">
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
    return (
        <>
            {BUTTON_DESCRIPTOR.map((array) =>
                array.map((keyValue) => {
                    const { icon, area, variant } =
                        getKeyInfoFromValue(keyValue)

                    return (
                        <CalculatorButton
                            key={getIDKeyFromValue(keyValue)}
                            id={getIDKeyFromValue(keyValue)}
                            onClick={handleClick}
                            icon={icon}
                            value={keyValue}
                            area={area}
                            variant={variant}
                        />
                    )
                })
            )}
        </>
    )
}

export const CalculatorStyle: ComponentStyleConfig = {
    baseStyle: (props) => ({
        display: 'grid',
        h: '700px',
        w: '500px',
        gridTemplateAreas: `'SCREEN SCREEN SCREEN SCREEN' 'SCREEN SCREEN SCREEN SCREEN' 'PLUS MINUS MULTIPLY DIVIDE' 'SEVEN HEIGHT NINE .' 'FOUR FIVE SIX RESET' 'ONE TWO THREE EGAL' 'ZERO ZERO POINT EGAL'`,
        gridAutoColumns: '1fr',
        gridAutoRows: '1fr',
        backgroundColor: mode('#ffe8d6', '#b7b7a4')(props),
        rounded: 'md',
        boxShadow: 'md',
        p: 5,
        border: '3px',
        borderStyle: 'ridge',
        borderColor: mode('#000000', '#b7b7a4')(props),
    }),
}

export default Calculator
