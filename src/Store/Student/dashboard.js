import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoSet: [],
  todoGet: [],
  book: [],
  getAnnouncement: [],
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
    libraryGet(state) {},
    studentLibrary(state, action) {
      state.book = action.payload;
    },
    announcementGet(state) {},
    studentAnnouncement(state, action) {
      state.getAnnouncement = action.payload;
    },
  },
});

export const {
  setTodoList,
  setTodo,
  getTodoLists,
  getTodos,
  studentLibrary,
  libraryGet,
  announcementGet,
  studentAnnouncement,
} = students.actions;

export default students.reducer;
