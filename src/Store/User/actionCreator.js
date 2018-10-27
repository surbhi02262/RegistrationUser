export const addUser = data => {
  return {
    type: "ADD_USER_DETAIL",
    data
  };
};
export const addAdddressDetails = data => {
  return {
    type: "ADD_ADDRESS",
    data
  };
};
export const addProfessionalDetails = data => {
  return {
    type: "ADD_PROFESSIONAL_DETAILS",
    data
  };
};

export const deleteUserInfo = data => {
  return {
    type: "DELETE_USER",
    data
  };
};
export const editUserInfo = data => {
  return {
    type: "EDIT_USER",
    data
  };
};
