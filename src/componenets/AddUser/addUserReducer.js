const initialState = {
  name: '',
  phone: '',
}

const addUserReducer = (state, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'ADD_USER': {
      return {
        state
      }
    }
    default: 
      return state
  }
}

export default AddUserReducer;