import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: [],
};

const supervisors = createSlice({
  name: "supervisor",
  initialState: initialState,
  reducers: {
    setCreateCourse(state) {},
    setCourse(state, action) {
      const newData = action.payload.data;
      state.course.push({
        courseId : newData.courseId,
        courseName : newData.courseName,
        teacherId : newData.teacherId,
        ETCS : newData.ETCS,
        creditHours : newData.creditHours,
      });
    },
  },
});

export const { setCourse, setCreateCourse } = supervisors.actions;

export default supervisors.reducer;
