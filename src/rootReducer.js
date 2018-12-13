import { combineReducers } from 'redux';
import playerOneReducer from './components/PlayerOne/playerOneReducer';
import offenseReducer from './components/Offense/offenseReducer';
import playerTwoReducer from './components/PlayerTwo/playerTwoReducer';

const rootReducer = combineReducers({
  playerOne: playerOneReducer,
  offense: offenseReducer,
  playerTwo: playerTwoReducer
}) 

export default rootReducer;