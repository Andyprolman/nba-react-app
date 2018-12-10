
export const changePlayerTwo = player => {
    return {
        type: 'CHANGE_PLAYER_TWO',
        payload: player
    }
}

export const selectPlayerTwo = player => {
    return {
        type: 'SELECT_PLAYER_TWO',
        payload: player
    }
}