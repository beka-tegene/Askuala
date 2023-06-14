import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchAnnouncement,
  fetchBook,
  fetchClass,
  fetchCourse,
  fetchTodoList,
  fetchUserLogin,
  fetchUserRegister,
  storeAnnouncement,
  storeClass,
  storeCourse,
  storeTodoList,
} from "./FetchAskuala";
import { registerGet } from "./Auth";
import {
  getAnnouncement,
  getLibraryBook,
  getTodos,
  setTodoList,
} from "./Student/dashboard";
import { getCourse, setCreateCourse } from "./supervisor/dashboard";
import { getClass, setCreateAnnouncement, setCreateClass } from "./teacher/dashboard";

export function* watchFetchAskuala() {
  yield takeLatest("auth/login", userLogin);
  yield takeLatest("auth/signup", userRegister);
  yield takeLatest("student/setTodo", todoList);
  yield takeLatest("student/getTodoLists", todoFetch);
  yield takeLatest("student/getLibrary", bookLibrary);
  yield takeLatest("student/getAnnounce", classAnnouncement);
  yield takeLatest("supervisor/setCourse", createCourse);
  yield takeLatest("supervisor/getCreateCourse", getCourseCreate);
  yield takeLatest("teacher/setClass", createClass);
  yield takeLatest("teacher/getCreateClass", getClassCreate);
  yield takeLatest("teacher/setAnnouncement", createAnnouncement);
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
function* createAnnouncement(action) {
  yield call(storeAnnouncement, action.payload.data);
  yield setCreateAnnouncement();
}
function* classAnnouncement() {
  const announcement = yield call(fetchAnnouncement);
  yield put(getAnnouncement(announcement));
}
function* createCourse(action) {
  yield call(storeCourse, action.payload.data);
  yield setCreateCourse();
}
function* getCourseCreate() {
  const course = yield call(fetchCourse);
  yield put(getCourse(course));
}
function* createClass(action) {
  yield call(storeClass, action.payload.data);
  yield setCreateClass();
}
function* getClassCreate() {
  const classes = yield call(fetchClass);
  yield put(getClass(classes));
}
