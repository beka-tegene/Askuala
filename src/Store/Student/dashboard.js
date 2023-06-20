import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoSet: [],
  todoGet: [],
  book: [],
  setBook: [],
  announcement: [],
  question: [],
  getQuestions: [],
  answers: [],
  getAnswers: [],
  joinClass: [],
  join: [],
  removeTodoSet: [],
  removeAnnouncementSet: [],
  removeQuestionSet: [],
};

const students = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {
    setTodoList(state) {},
    setTodo(state, action) {
      const newData = action.payload.data;
      state.todoSet.push({
        inputTodo: newData.getTodo,
        studentId: newData.id,
      });
    },
    setRemoveTodo(state, action) {
      const newData = action.payload;
      state.removeTodoSet.push({
        id: newData,
      });
    },
    getTodoLists(state) {},
    getTodos(state, action) {
      state.todoSet = action.payload;
    },
    setBooks(state) {},
    setBooksList(state, action) {
      const newData = action.payload;
      state.setBook.push({
        BookName: newData.BookName,
        BookAuthor: newData.BookAuthor,
        BookDepratmen: newData.BookDepratmen,
        fileInput: newData.fileInput,
      });
    },
    getLibrary(state) {},
    getLibraryBook(state, action) {
      state.book = action.payload;
    },
    setRemoveAnnouncement(state, action) {
      const newData = action.payload;
      state.removeAnnouncementSet.push({
        id: newData,
      });
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
    setRemoveQuestion(state, action) {
      const newData = action.payload;
      state.removeQuestionSet.push({
        id: newData,
      });
    },
    getQuestion(state) {},
    getQuestionAnswer(state, action) {
      state.getQuestions = action.payload;
    },
    setAnswer(state) {},
    setAnswerQuestion(state, action) {
      const newData = action.payload;
      state.answers.push({
        answer: newData.answer,
        id: newData.id,
        Username: newData.Username,
      });
    },
    getAnswer(state) {},
    getAnswerQuestion(state, action) {
      state.getAnswers = action.payload.data;
    },

    setJoin(state) {},
    setJoinClass(state, action) {
      const newData = action.payload;
      state.join.push({
        Username: newData.Username,
        department: newData.department,
        id: newData.id,
        lectureID: newData.lectureID,
        _id: newData._id,
      });
    },
  },
});

export const {
  setJoin,
  setRemoveAnnouncement,
  setRemoveQuestion,
  setBooksList,
  setBooks,
  setJoinClass,
  setRemoveTodo,
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
