import { call, takeLatest } from "redux-saga/effects";
import { fetchUserLogin } from "./FetchAskuala";

export function* watchFetchAskuala() {
  yield takeLatest("auth/login", userLogin);
}

function* userLogin(action) {
  yield call(fetchUserLogin, action.payload.data);
}
