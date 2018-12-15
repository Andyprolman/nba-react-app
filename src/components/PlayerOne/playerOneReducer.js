const json = require('/Users/andrew/nba-react-app/src/playerData.json');


const initialState = {
  playerData: '',
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
  },
  defense: {
    defensiveReb: '',
    versatiltiy: '',
    pandrHandler: '',
    pandrBig: '',
    postDefense: '',
    rimProtection: ''
  },
  mental: {
    decisionMaking: '',
    offBallMovement: '',
    positioning: '',
    rotations: ''
  }
  
}

const playerOneReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'SELECT_PLAYER_ONE': {
        const index = json.findIndex((item) => {
          return item.Player == payload
        })
      return {
        ...state,
        playerData: json[index],
        playerOne: json[index].Player,
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
        },

        defense: {
          defensiveReb: json[index].DefensiveRebounding,
          versatility: json[index].DefensiveVersatility,
          pandrHandler: json[index].DefPickAndRollHandler,
          pandrBig: json[index].DefPickAndRollBig,
          postDefense: json[index].PostDefense,
          rimProtection: json[index].RimProtection
        },

        mental: {
          decisionMaking: json[index].DecisionMaking,
          offBallMovement:json[index].OffBallMovement,
          positioning: json[index].Positioning,
          rotations: json[index].Rotations
        }
      }
    }
    default: {
      return state
    }
  }
}

export default playerOneReducer;