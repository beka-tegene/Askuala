import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: [],
  courseFitch: [],
  removeCourseSet: [],
  updateCourse:[],
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
    setUpdateCourse(state, action) {
      const newData = action.payload.data;
      state.updateCourse.push({
        _id : newData._id,
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

export const { setCourse, setCreateCourse,getCourse ,getCreateCourse,setRemoveCourse,setUpdateCourse} = supervisors.actions;

export default supervisors.reducer;
