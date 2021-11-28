import userTypes from "./user.types";
export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});
export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const emailSignInStart = (userCredentials) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});
export const signOutStart = () => ({
  type: userTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: userTypes.SIGN_OUT_SUCCESS,
});
export const signUpUserStart = (userCred) => ({
  type: userTypes.SIGN_UP_START,
  payload: userCred,
});

export const googleSignInStart = () => ({
  type: userTypes.SIGN_IN_GOOGLE_START,
});
export const userError = (err) => ({
  type: userTypes.USER_ERROR,
  payload: err,
});

export const resetNameState = () => ({
  type: userTypes.RESET_NAME_STATE,
});

export const changeNameStart = (newName) => ({
  type: userTypes.CHANGE_NAME_START,
  newName,
});

export const changeNameSuccess = () => ({
  type: userTypes.CHANGE_NAME_SUCCESS,
  payload: true,
});
