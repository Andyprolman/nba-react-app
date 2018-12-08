import { combineReducers } from 'redux';
import addUserReducer from './components/AddUser/addUserReducer';
import userReducer from './components/Users/usersReducer'

const rootReducer = combineReducers({
  addUser: addUserReducer,
  user: userReducer
}) 

export default rootReducer;