import userTypes from "./user.types";
import { takeLatest, call, all, put } from "redux-saga/effects";
import firebaseInstance from "../../services/firebase";
import {
  changeNameSuccess,
  signInSuccess,
  signOutSuccess,
  userError,
} from "./user.actions";

export function* userAuthListener(user, additionalData = {}) {
  try {
    const userRef = yield call(firebaseInstance.handleUserProfile, {
      userAuth: user,
      additionalData,
    });
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (e) {}
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield firebaseInstance.getUser();
    if (!userAuth) return;
    yield userAuthListener(userAuth);
  } catch (e) {}
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
  try {
    yield firebaseInstance.signOut();
    yield put(signOutSuccess());
  } catch (e) {}
}
export function* onSignOutStart() {
  yield takeLatest(userTypes.SIGN_OUT_START, signOutUser);
}

export function* signUp({
  payload: { displayName, email, password, confirmedPassword },
}) {
  if (password !== confirmedPassword) {
    const err = ["Password mismatch"];
    yield put(userError(err));
    return;
  }

  try {
    const { user } = yield firebaseInstance.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const additionalData = { displayName };
    yield userAuthListener(user, additionalData);

    //yield call(firebaseInstance.handleUserProfile, {userAuth: user, additionalData: {displayName}});
  } catch (err) {
    yield put(userError([err.message]));
  }
}

export function* onSignUpStart() {
  yield takeLatest(userTypes.SIGN_UP_START, signUp);
}

export function* googleSignIn() {
  try {
    const { user } = yield firebaseInstance.auth.signInWithPopup(
      firebaseInstance.googleProvider
    );
    yield userAuthListener(user);
  } catch (e) {
    yield put(userError([e.message]));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.SIGN_IN_GOOGLE_START, googleSignIn);
}

export function* changeName(action) {
  try {
    const { newName } = action;
    yield call(firebaseInstance.changeName, newName);
    yield put(changeNameSuccess());
  } catch (e) {
    yield put(userError([e.message]));
  }
}
export function* onChangeNameStart() {
  yield takeLatest(userTypes.CHANGE_NAME_START, changeName);
}

export default function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onGoogleSignInStart),
    call(onSignUpStart),
    call(onChangeNameStart),
  ]);
}
