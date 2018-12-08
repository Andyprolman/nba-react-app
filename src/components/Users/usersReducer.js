const initialState = {
  list: []
}

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    
    default: {
      return state
    }
  }
}

export default usersReducer;