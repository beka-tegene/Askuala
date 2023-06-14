import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  class: [],
  classFitch: [],
  Announcement: [],
  AnnouncementFitch: [],
};

const teachers = createSlice({
  name: "teacher",
  initialState: initialState,
  reducers: {
    setCreateClass(state) {},
    setClass(state, action) {
      const newData = action.payload.data;
      state.class.push({
        courseId: newData.courseId,
        courseName: newData.courseName,
        ETCS: newData.ETCS,
        creaditHours: newData.creaditHours,
        courseDept: newData.courseDept,
        classCreator: newData.classCreator,
        startedDay: newData.startedDay,
        endDay: newData.endDay,
        description: newData.description,
      });
    },
    getCreateClass(state) {},
    getClass(state, action) {
      state.classFitch = action.payload;
    },
    setCreateAnnouncement(state) {},
    setAnnouncement(state, action) {
      const newData = action.payload.data;
      state.Announcement.push({
        classId: newData.classId,
        title: newData.title,
        startedTime: newData.startedTime,
        URL: newData.URL,
        message: newData.message,
        announcerName: newData.announcerName,
      });
    },
  },
});

export const {
  setClass,
  setCreateClass,
  getClass,
  getCreateClass,
  setCreateAnnouncement,
  setAnnouncement,
} = teachers.actions;

export default teachers.reducer;