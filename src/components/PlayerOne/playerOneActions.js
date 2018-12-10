export const changePlayerOne = player => {
	return {
		type: 'CHANGE_PLAYER_ONE',
		payload: player
	}
}

export const selectPlayerOne = player => {
	return {
		type: 'SELECT_PLAYER_ONE',
		payload: player
	}
}