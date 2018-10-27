const initialState = {
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      let newUser = JSON.parse(JSON.stringify(state.users));
      action.data.id = Math.round((Math.random() + 1) * 100000);
      newUser.push(action.data);
      return {
        ...state,
        users: newUser
      };
    }
    case "DELETE_USER": {
      let updatedUser = state.users.filter(user => user.id !== action.id);
      return {
        ...state,
        users: updatedUser
      };
    }
    case "UPDATE_USER": {
      let newUser = JSON.parse(JSON.stringify(state.users));

      return {
        ...state,
        users: state.users.map(
          user => (user.id === action.data.id ? action.data : user)
        )
      };
    }
    default:
      return state;
  }
};
