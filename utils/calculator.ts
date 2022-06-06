import { KEYS } from './key'
import { getIDKeyFromValue, KEYS_VALUES } from './key'

// Coupled with the GRID_AREA
export const BUTTON_DESCRIPTOR = [
    [KEYS.PLUS, KEYS.MINUS, KEYS.MULTIPLY, KEYS.DIVIDE],
    [KEYS.SEVEN, KEYS.HEIGHT, KEYS.NINE],
    [KEYS.FOUR, KEYS.FIVE, KEYS.SIX, KEYS.RESET],
    [KEYS.ONE, KEYS.TWO, KEYS.THREE],
    [KEYS.ZERO, KEYS.POINT, KEYS.EGAL],
]

export function getIconFromKeyValue(value) {
    if (!KEYS_VALUES.includes(value))
        throw Error(`The key: ${value}, doesn't belong to KEYS`)

    switch (value) {
        case KEYS.ONE:
            return KEYS.ONE
        case KEYS.TWO:
            return KEYS.TWO
        case KEYS.THREE:
            return KEYS.THREE
        case KEYS.FOUR:
            return KEYS.FOUR
        case KEYS.FIVE:
            return KEYS.FIVE
        case KEYS.SIX:
            return KEYS.SIX
        case KEYS.SEVEN:
            return KEYS.SEVEN
        case KEYS.HEIGHT:
            return KEYS.HEIGHT
        case KEYS.NINE:
            return KEYS.NINE
        case KEYS.ZERO:
            return KEYS.ZERO
        case KEYS.DIVIDE:
            return '➗'
        case KEYS.MULTIPLY:
            return '✖️'
        case KEYS.PLUS:
            return '➕'
        case KEYS.MINUS:
            return '➖'
        case KEYS.POINT:
            return KEYS.POINT
        case KEYS.EGAL:
            return KEYS.EGAL
        case KEYS.RESET:
            return 'RESET'
        default:
            break
    }
}

export function getBgFromKeyValue(value) {
    if (!KEYS_VALUES.includes(value))
        throw Error(`The key: ${value}, doesn't belong to KEYS`)

    switch (value) {
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.HEIGHT:
        case KEYS.NINE:
        case KEYS.ZERO:
        case KEYS.POINT:
            return 'button.number.background'
        case KEYS.DIVIDE:
        case KEYS.MULTIPLY:
        case KEYS.PLUS:
        case KEYS.MINUS:
        case KEYS.EGAL:
        case KEYS.RESET:
            return 'button.operation.background'
        default:
            break
    }
}

export function getAreaFromKeyValue(value) {
    if (!KEYS_VALUES.includes(value))
        throw Error(`The key: ${value}, doesn't belong to KEYS`)

    switch (value) {
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.HEIGHT:
        case KEYS.NINE:
        case KEYS.ZERO:
        case KEYS.DIVIDE:
        case KEYS.MULTIPLY:
        case KEYS.PLUS:
        case KEYS.MINUS:
        case KEYS.POINT:
        case KEYS.EGAL:
        case KEYS.RESET:
            return getIDKeyFromValue(value)
        default:
            break
    }
}

export function getColorFromKeyValue(value) {
    if (!KEYS_VALUES.includes(value))
        throw Error(`The key: ${value}, doesn't belong to KEYS`)

    switch (value) {
        case KEYS.ONE:
        case KEYS.TWO:
        case KEYS.THREE:
        case KEYS.FOUR:
        case KEYS.FIVE:
        case KEYS.SIX:
        case KEYS.SEVEN:
        case KEYS.HEIGHT:
        case KEYS.NINE:
        case KEYS.ZERO:
        case KEYS.POINT:
            return 'button.number.color'
        case KEYS.DIVIDE:
        case KEYS.MULTIPLY:
        case KEYS.PLUS:
        case KEYS.MINUS:
        case KEYS.EGAL:
        case KEYS.RESET:
            return 'button.operation.color'
        default:
            break
    }
}

export function getKeyInfoFromValue(value) {
    return {
        icon: getIconFromKeyValue(value),
        bg: getBgFromKeyValue(value),
        area: getAreaFromKeyValue(value),
        color: getColorFromKeyValue(value),
    }
}
