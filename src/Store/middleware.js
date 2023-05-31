import { call, takeLatest } from "redux-saga/effects";
import { fetchUserLogin, fetchUserRegister } from "./FetchAskuala";

export function* watchFetchAskuala() {
  yield takeLatest("auth/login", userLogin);
  yield takeLatest("auth/signup", userRegister);
}

function* userLogin(action) {
  yield call(fetchUserLogin, action.payload.data);
}
function* userRegister(action) {
  yield call(fetchUserRegister, action.payload.data);
}