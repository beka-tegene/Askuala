import { call, put, takeLatest } from "redux-saga/effects";
import {
  UpdateAccount,
  UpdateCourse,
  UpdateAnnouncement,
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
  removeAnnouncement,
  removeClass,
  removeCourse,
  removeQA,
  removeTodo,
  removeUser,
  storeAnnouncement,
  storeAnswers,
  storeClass,
  storeCourse,
  storeJoin,
  storeMaterial,
  storeTodoList,
  storebook,
  storequestion,
} from "./FetchAskuala";
import { getUser, getUserData, loginGet, registerGet } from "./Auth";
import {
  getAnnounce,
  getAnnouncement,
  getAnswerQuestion,
  getLibraryBook,
  getQuestion,
  getQuestionAnswer,
  getTodos,
  setAnswer,
  setBooks,
  setJoin,
  setQuestion,
  setTodo,
  setTodoList,
} from "./Student/dashboard";
import {
  getCourse,
  getCreateCourse,
  setCreateCourse,
} from "./supervisor/dashboard";
import {
  getClass,
  getCreateClass,
  setCreateAnnouncement,
  setCreateClass,
  setMaterial,
} from "./teacher/dashboard";

export function* watchFetchAskuala() {
  yield takeLatest("auth/login", userLogin);
  yield takeLatest("auth/signup", userRegister);
  yield takeLatest("auth/getUser", getUsers);
  yield takeLatest("auth/setRemoveUser", removeUserList);
  yield takeLatest("auth/updateListAccount", updateUserAccount);

  yield takeLatest("student/setTodo", todoList);
  yield takeLatest("student/setRemoveTodo", removeTodoList);
  yield takeLatest("student/getTodoLists", todoFetch);
  yield takeLatest("student/getLibrary", bookLibrary);
  yield takeLatest("student/setBooksList", setBookLibrary);
  yield takeLatest("student/getAnnounce", classAnnouncement);
  yield takeLatest("student/setQuestionAnswer", createQuestion);
  yield takeLatest("student/getQuestion", getQuestionCreate);
  yield takeLatest("student/setAnswerQuestion", createAnswer);
  yield takeLatest("student/getAnswer", getAnswerCreate);
  yield takeLatest("student/setJoinClass", StudentJoinClass);
  yield takeLatest("student/setRemoveAnnouncement", removeAnnouncementList);
  yield takeLatest("student/setRemoveQuestion", removeQuestionList);

  yield takeLatest("supervisor/setCourse", createCourse);
  yield takeLatest("supervisor/getCreateCourse", getCourseCreate);
  yield takeLatest("supervisor/setUpdateCourse", updateCourseList);
  yield takeLatest("supervisor/setRemoveCourse", removeCourseList);

  yield takeLatest("teacher/setClass", createClass);
  yield takeLatest("teacher/getCreateClass", getClassCreate);
  yield takeLatest("teacher/setAnnouncement", createAnnouncement);
  yield takeLatest("teacher/setUpdateAnnouncement", updateAnnouncementList);
  yield takeLatest("teacher/setMaterialClass", teacherMaterialClass);
  yield takeLatest("teacher/setRemoveClass", removeClassList);
}

function* userLogin(action) {
  yield call(fetchUserLogin, action.payload.data);
  yield loginGet();
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
function* setBookLibrary(action) {
  yield call(storebook, action.payload.data);
  yield setBooks();
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
function* teacherMaterialClass(action) {
  yield call(storeMaterial, action.payload.data);
  yield setMaterial();
}
function* removeTodoList(action) {
  yield call(removeTodo, action.payload);
  yield setTodo();
}
function* removeUserList(action) {
  yield call(removeUser, action.payload);
  yield getUser();
}
function* removeClassList(action) {
  yield call(removeClass, action.payload);
  yield getCreateClass();
}
function* removeCourseList(action) {
  yield call(removeCourse, action.payload);
  yield getCreateCourse();
}
function* removeAnnouncementList(action) {
  yield call(removeAnnouncement, action.payload);
  yield getAnnounce();
}
function* removeQuestionList(action) {
  yield call(removeQA, action.payload);
  yield getQuestion();
}



function* updateUserAccount(action) {
  yield call(UpdateAccount, action.payload);
  yield getUser();
}
function* updateAnnouncementList(action) {
  yield call(UpdateAnnouncement, action.payload);
  yield getAnnounce();
}
function* updateCourseList(action) {
  yield call(UpdateCourse, action.payload);
  yield getCreateCourse();
}
