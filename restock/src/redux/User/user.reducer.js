import userTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    userErr: [],
    resetPasswordSuccess: false,
    changePasswordSuccess: false,
    changeEmailSuccess: false,
    changeNameSuccess: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                userErr: [],
            };
        case userTypes.USER_ERROR:
            return {
                ...state,
                userErr: action.payload,
            };
        case userTypes.RESET_STATE:
        case userTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE,
            };
        default:
            return state;
    }
}

export default userReducer;