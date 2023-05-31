import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputLogIn: [],
  InputRegister: [],
};

const auth = createSlice({
  name: "auth",
  initialState:initialState,
  reducers: {
    login(state, action) {
      const newData = action.payload.data;
      state.InputLogIn.push({
        email: newData.email,
        password: newData.password,
      });
    },
    signup(state , action) {
      const newData = action.payload.data;
      state.InputRegister.push({
        email: newData.email,
        password: newData.password,
      });
    }
  },
});

export const { login } = auth.actions;

export default auth.reducer;
