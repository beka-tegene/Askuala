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
        FullName: newData.FullName,
        email: newData.email,
        role: newData.role,
        password: newData.password,
        cPassword: newData.cPassword,
      });
    },
    registerGet(state){}
  },
});

export const { login, signup, registerGet } = auth.actions;

export default auth.reducer;
