import { combineReducers } from 'redux';
import playerOneReducer from './components/PlayerOne/playerOneReducer';
import playerTwoReducer from './components/PlayerTwo/playerTwoReducer';

const rootReducer = combineReducers({
  playerOne: playerOneReducer,
  playerTwo: playerTwoReducer
}) 

export default rootReducer;