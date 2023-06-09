import { call, put, takeLatest } from "redux-saga/effects";
import {  fetchAnnouncement, fetchBook, fetchTodoList, fetchUserLogin, fetchUserRegister, storeCourse, storeTodoList } from "./FetchAskuala";
import { registerGet } from "./Auth";
import {   getAnnouncement, getLibraryBook, getTodos, setTodoList } from "./Student/dashboard";
import { setCreateCourse } from "./supervisor/dashboard";

export function* watchFetchAskuala() {
  yield takeLatest("auth/login", userLogin);
  yield takeLatest("auth/signup", userRegister);
  yield takeLatest("student/setTodo", todoList);
  yield takeLatest("student/getTodoLists", todoFetch);
  yield takeLatest("student/getLibrary", bookLibrary);
  yield takeLatest("student/getAnnounce", classAnnouncement);
  yield takeLatest("supervisor/setCourse", createCourse);
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
function* bookLibrary() {
  const books = yield call(fetchBook);
  yield put(getLibraryBook(books));
}
function* classAnnouncement() {
  const announcement = yield call(fetchAnnouncement);
  yield put(getAnnouncement(announcement));
}
function* createCourse(action) {
  yield call(storeCourse, action.payload.data);
  yield setCreateCourse();
}
