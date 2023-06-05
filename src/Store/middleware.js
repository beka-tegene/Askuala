import { call, takeLatest } from "redux-saga/effects";
import { fetchTodoList, fetchUserLogin, fetchUserRegister } from "./FetchAskuala";
import { registerGet } from "./Auth";
import { studentGet } from "./Student/dashboard";

export function* watchFetchAskuala() {
  yield takeLatest("auth/login", userLogin);
  yield takeLatest("auth/signup", userRegister);
  yield takeLatest("Student/todoLists", TodoList);
}

function* userLogin(action) {
  yield call(fetchUserLogin, action.payload.data);
  yield registerGet();
}
function* userRegister(action) {
  yield call(fetchUserRegister, action.payload.data);
  yield registerGet();
}
function* TodoList(action) {
  yield call(fetchTodoList, action.payload.data);
  yield studentGet();
}
