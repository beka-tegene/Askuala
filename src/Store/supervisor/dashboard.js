import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: [],
  courseFitch: [],
  removeCourseSet: []
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
    setRemoveCourse(state, action) {
      const newData = action.payload;
      state.removeCourseSet.push({
        id: newData,
      });
    },
    getCreateCourse(state) {},
    getCourse(state, action) {
      state.courseFitch = action.payload.data;
    },
  },
});

export const { setCourse, setCreateCourse,getCourse ,getCreateCourse,setRemoveCourse} = supervisors.actions;

export default supervisors.reducer;
