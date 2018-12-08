const initialState = {
  name: '',
  phone: '',
}

const addUserReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    
    default: {
      return state
    }
  }
}

export default addUserReducer;