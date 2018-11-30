import { combine } from 'redux';
import addUserReducer from './components/AddUsers/addUserReducer';
import userReducer from './components/Users/userReducer'

const rootReducer = combineReducers({
  addUser: addUserResucer,
  user: userReducer
})