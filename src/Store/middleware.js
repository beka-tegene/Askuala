import { call, put, takeLatest } from "redux-saga/effects";
import {  fetchTodoList, fetchUserLogin, fetchUserRegister, storeTodoList } from "./FetchAskuala";
import { registerGet } from "./Auth";
import {   getTodos, setTodoList } from "./Student/dashboard";

export function* watchFetchAskuala() {
  yield takeLatest("auth/login", userLogin);
  yield takeLatest("auth/signup", userRegister);
  yield takeLatest("student/setTodo", todoList);
  yield takeLatest("student/getTodoLists", todoFetch);
  // yield takeLatest("student/libraryGet", bookLibrary);
  // yield takeLatest("student/announcementGet", classAnnouncement);
}

function* userLogin(action) {
  yield call(fetchUserLogin, action.payload.data);
  yield registerGet();
}
function* userRegister(action) {
  yield call(fetchUserRegister, action.payload.data);
  yield registerGet();
}
function* todoList(action) {
  yield call(storeTodoList, action.payload);
  yield setTodoList();
}
function* todoFetch() {
  const todo = yield call(fetchTodoList);
  yield put(getTodos(todo));
}
// function* bookLibrary() {
//   const library = yield call(fetchBook);
//   yield put(studentLibrary(library));
// }
// function* classAnnouncement() {
//   const announcement = yield call(fetchAnnouncement);
//   yield put(studentAnnouncement(announcement));
// }

