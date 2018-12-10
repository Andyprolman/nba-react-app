import { combineReducers } from 'redux';
import playerOneReducer from './components/PlayerOne/playerOneReducer';
import comparisonReducer from './components/Comparison/comparisonReducer';
import playerTwoReducer from './components/PlayerTwo/playerTwoReducer';

const rootReducer = combineReducers({
  playerOne: playerOneReducer,
  comparison: comparisonReducer,
  playerTwo: playerTwoReducer
}) 

export default rootReducer;