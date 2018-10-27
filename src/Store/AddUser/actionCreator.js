export const addUser = data => {
  return {
    type: "ADD_USER",
    data
  };
};

export const deleteUser = id => {
  return {
    type: "DELETE_USER",
    id
  };
};

export const updateUser = data => {
  return {
    type: "UPDATE_USER",
    data
  };
};
