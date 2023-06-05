import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const Students = createSlice({
  name: "Student",
  initialState: initialState,
  reducers: {
    todoLists(state, action) {
      const newData = action.payload.data;
      state.todo.push({
        inputTodo: newData,
      });
    },
    studentGet(state) {},
  },
});

export const { todoLists, studentGet } = Students.actions;

export default Students.reducer;
