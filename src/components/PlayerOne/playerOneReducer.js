const json = require('/Users/andrew/nba-react-app/src/playerData.json');


const initialState = {
  playerOne: '',
  team: '',
  age: '',
  contract: '',
  agent: '',
  offense: {
    driving: '',
    finishing: '', 
    foulDrawing: '',
    offensiveReb: '',
    otmshooting: '',
    playmaking: '',
    pandrHandler: '',
    pandrBig: '',
    postScoring: '',
    pullUpShooting: '',
    spacer: '',
    spotUpShooting: ''
  }
  
}

const playerOneReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'CHANGE_PLAYER_ONE': {
      return {
        ...state,
        playerOne: payload
      }
    }
    case 'SELECT_PLAYER_ONE': {
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
          finishing: json[index].Finishing,
          foulDrawing: json[index].FoulDrawing,
          offensiveReb: json[index].OffensiveRebounding,
          otmShooting: json[index].OnTheMoveShooting,
          playmaking: json[index].Playmaking,
          pandrHandler: json[index].OffPickAndRollHandler,
          pandrBig: json[index].OffPickAndRollBig,
          postScoring: json[index].PostScoring,
          pullUpShooting: json[index].PullUpShooting,
          spacer: json[index].SpaceCreation,
          spotUpShooting: json[index].SpotUpShooting
        }

      }
    }
    default: {
      return state
    }
  }
}

export default playerOneReducer;