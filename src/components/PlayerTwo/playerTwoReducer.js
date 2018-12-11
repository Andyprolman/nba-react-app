const json = require('/Users/andrew/nba-react-app/src/playerData.json');

const initialState = {
  playerTwo: '',
  team: '',
  age: '',
  contract: '',
  agent: '',
  offense: {
    driving: '',
    finishing: '', 
  }
}


const playerTwoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_PLAYER_TWO': {
      return {
        ...state,
        playerTwo: payload
      }
    }
    case 'SELECT_PLAYER_TWO': {
      const index = json.findIndex((item) => {
          return item.Player == payload
        })
      return {
        ...state,
        team: json[index].Team,
        age: json[index].Age,
        contract: json[index].Contract,
        agent: json[index].Agent,
        offense: {
          driving: json[index].Driving,
          finishing: json[index].Finishing
        }
      }
    }
    default: {
      return state
    }
  }
}

export default playerTwoReducer;