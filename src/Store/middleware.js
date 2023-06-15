import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchAnnouncement,
  fetchAnswer,
  fetchBook,
  fetchClass,
  fetchCourse,
  fetchQuestion,
  fetchTodoList,
  fetchUserLogin,
  fetchUserRegister,
  fetchUsers,
  removeTodo,
  storeAnnouncement,
  storeAnswers,
  storeClass,
  storeCourse,
  storeJoin,
  storeTodoList,
  storequestion,
} from "./FetchAskuala";
import { getUserData, registerGet } from "./Auth";
import {
  getAnnouncement,
  getAnswerQuestion,
  getLibraryBook,
  getQuestionAnswer,
  getTodos,
  setAnswer,
  setJoin,
  setQuestion,
  setTodo,
  setTodoList,
} from "./Student/dashboard";
import { getCourse, setCreateCourse } from "./supervisor/dashboard";
import { getClass, setCreateAnnouncement, setCreateClass, setMaterial } from "./teacher/dashboard";

export function* watchFetchAskuala() {
  yield takeLatest("auth/login", userLogin);
  yield takeLatest("auth/signup", userRegister);
  yield takeLatest("auth/getUser", getUsers);
  yield takeLatest("student/setTodo", todoList);

  yield takeLatest("student/setRemoveTodo", removeTodoList);
  yield takeLatest("student/getTodoLists", todoFetch);
  yield takeLatest("student/getLibrary", bookLibrary);
  yield takeLatest("student/getAnnounce", classAnnouncement);
  yield takeLatest("supervisor/setCourse", createCourse);
  yield takeLatest("supervisor/getCreateCourse", getCourseCreate);
  yield takeLatest("teacher/setClass", createClass);
  yield takeLatest("teacher/getCreateClass", getClassCreate);
  yield takeLatest("teacher/setAnnouncement", createAnnouncement);
  yield takeLatest("student/setQuestionAnswer", createQuestion);
  yield takeLatest("student/getQuestion", getQuestionCreate);
  yield takeLatest("student/setAnswerQuestion", createAnswer);
  yield takeLatest("student/getAnswer", getAnswerCreate);
  yield takeLatest("student/setJoinClass", StudentJoinClass);
  yield takeLatest("teacher/setMaterialClass", teacherMaterialClass);
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
function* createQuestion(action) {
  yield call(storequestion, action.payload.data);
  yield setQuestion();
}
function* getQuestionCreate() {
  const question = yield call(fetchQuestion);
  yield put(getQuestionAnswer(question));
}
function* createAnswer(action) {
  yield call(storeAnswers, action.payload.data);
  yield setAnswer();
}
function* getAnswerCreate() {
  const answer = yield call(fetchAnswer);
  yield put(getAnswerQuestion(answer));
}
function* StudentJoinClass(action) {
  yield call(storeJoin, action.payload.data);
  yield setJoin();
}
function* getUsers() {
  const user = yield call(fetchUsers);
  yield put(getUserData(user));
}
function* removeTodoList(action) {
  yield call(removeTodo, action.payload);
  yield setTodo();
}
function* teacherMaterialClass(action) {
  yield call(storeJoin, action.payload.data);
  yield setMaterial();
}
// function* getUsers() {
//   const user = yield call(fetchUsers);
//   yield put(getUserData(user));
// }