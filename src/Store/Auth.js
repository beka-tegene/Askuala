import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputLogIn: [],
  InputRegister: [],
  user:[],
  removeUserSet:[],
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
        id: newData.id,
        FullName: newData.FullName,
        email: newData.email,
        phoneNumber: newData.phoneNumber,
        gender: newData.gender,
        role: newData.role,
        department: newData.department,
        password: newData.password,
        cPassword: newData.cPassword,
      });
    },
    getUser(state){},
    getUserData(state ,action){
      state.user = action.payload
    },
    setRemoveUser(state, action) {
      const newData = action.payload;
      state.removeUserSet.push({
        id: newData,
      });
    },
    registerGet(state){}
  },
});

export const { login, signup, registerGet,getUser,getUserData,setRemoveUser } = auth.actions;

export default auth.reducer;
