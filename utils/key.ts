const OPERATOR_KEYS = {
    DIVIDE: '/',
    MULTIPLY: '*',
    PLUS: '+',
    MINUS: '-',
    EGAL: '=',
}

const OPERATIONS_KEYS = {
    ONE: '1',
    TWO: '2',
    THREE: '3',
    FOUR: '4',
    FIVE: '5',
    SIX: '6',
    SEVEN: '7',
    HEIGHT: '8',
    NINE: '9',
    ZERO: '0',
    POINT: '.',
    ...OPERATOR_KEYS,
}

const ACTION_KEYS = {
    ENTER: 'Enter',
    BACKSPACE: 'Backspace',
    RESET: 'Delete',
}

export const KEYS = {
    ...OPERATIONS_KEYS,
    ...ACTION_KEYS,
}

export const KEYS_VALUES = Object.values(KEYS)
export const KEYS_ID = Object.keys(KEYS)
export const ACTION_KEYS_VALUES = Object.values(ACTION_KEYS)
export const ACTION_KEYS_ID = Object.keys(ACTION_KEYS)
export const OPERATIONS_KEYS_VALUES = Object.values(OPERATIONS_KEYS)

export function getIDKeyFromValue(value) {
    if (!KEYS_VALUES.includes(value))
        throw Error('This value is not included inside KEYS_VALUES')

    return KEYS_ID[KEYS_VALUES.indexOf(value)]
}
