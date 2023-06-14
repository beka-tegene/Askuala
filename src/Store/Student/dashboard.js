import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoSet: [],
  todoGet: [],
  book: [],
  announcement: [],
  question: [],
  getQuestions: [],
  answer: [],
};

const students = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {
    setTodoList(state) {},
    setTodo(state, action) {
      const newData = action.payload;
      state.todoSet.push({
        inputTodo: newData,
      });
    },
    getTodoLists(state) {},
    getTodos(state, action) {
      state.todoSet = action.payload;
    },
    getLibrary(state) {},
    getLibraryBook(state, action) {
      state.book = action.payload;
    },
    getAnnounce(state) {},
    getAnnouncement(state, action) {
      state.announcement = action.payload;
    },
    setQuestion(state) {},
    setQuestionAnswer(state, action) {
      const newData = action.payload;
      state.question.push({
        question: newData.question,
        department: newData.department,
        Username: newData.Username,
      });
    },
    getQuestion(state) {},
    getQuestionAnswer(state, action) {
      state.getQuestions = action.payload;
    },
    setAnswer(state) {},
    setAnswerQuestion(state, action) {
      const newData = action.payload;
      state.question.push({
        question: newData.question,
        id: newData.id,
        Username: newData.Username,
      });
    },
    getAnswer(state) {},
    getAnswerQuestion(state, action) {
      state.getQuestions = action.payload;
    },
  },
});

export const {
  setTodoList,
  setTodo,
  getTodoLists,
  getTodos,
  getLibrary,
  getLibraryBook,
  getAnnounce,
  getAnnouncement,
  setQuestion,
  setQuestionAnswer,
  getQuestion,
  getQuestionAnswer,
  setAnswer,
  setAnswerQuestion,
  getAnswer,
  getAnswerQuestion,
} = students.actions;

export default students.reducer;
