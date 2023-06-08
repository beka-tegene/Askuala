import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  lib: [],
};

const Students = createSlice({
  name: "Student",
  initialState: initialState,
  reducers: {
    studentGet(state) { },
    todoLists(state, action) {
      const newData = action.payload.data;
      state.todo.push({
        inputTodo: newData,
      });
    },
    libraryGet(state) { },
    library(state, action) {
      state.lib = action.payload;
    },
  },
});

export const { todoLists, studentGet, library ,libraryGet } = Students.actions;

export default Students.reducer;
