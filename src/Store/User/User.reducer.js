const initialState = {
  userInfo: {
    id: "",
    info: {},
    address: [],
    professinalInfo: {}
  },
  updateEmp: {},
  isUpdate: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER_DETAIL": {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          id: Math.random(1000 * 1),
          info: action.data
        }
      };
    }
    case "ADD_ADDRESS": {
      let addressInfom = JSON.parse(JSON.stringify(state.userInfo.address));
      addressInfom.push(action.data);
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          address: addressInfom
        }
      };
    }
    case "ADD_PROFESSIONAL_DETAILS": {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          professinalInfo: action.data
        }
      };
    }
    case "DELETE_USER": {
      return {
        ...state,
        ...state.userInfo,
        userInfo: {
          id: "",
          info: {},
          address: [],
          professinalInfo: {}
        }
      };
    }
    case "EDIT_USER": {
      console.log(JSON.stringify(state.updateEmp));

      return {
        ...state,
        updateEmp: JSON.parse(JSON.stringify(action.data)),
        isUpdate: true
      };
    }
    default:
      return state;
  }
};
