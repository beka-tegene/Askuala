import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: [],
  courseFitch: []
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
        creaditHours : newData.creaditHours,
        courseDept : newData.courseDept,
        CourseCreator: newData.CourseCreator,
      });
    },
    getCreateCourse(state) {},
    getCourse(state, action) {
      state.courseFitch = action.payload.data;
    },
  },
});

export const { setCourse, setCreateCourse,getCourse ,getCreateCourse} = supervisors.actions;

export default supervisors.reducer;
