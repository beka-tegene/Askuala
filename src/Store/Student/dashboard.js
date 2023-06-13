import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoSet: [],
  todoGet: [],
  book: [],
  announcement: [],
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
} = students.actions;

export default students.reducer;
