import axios from "axios";

export const fetchUserLogin = async (data) => {
  const useData = await axios.post("http://localhost:5000/login-user", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  console.log(useData);
  if (useData.data.role === "student") {
    window.location.href = "/student/dashboard";
  }else if (useData.data.role === "teacher") {
    window.location.href = "/teacher/dashboard";
  }else if (useData.data.role === "supervisor") {
    window.location.href = "/supervisor/dashboard";
  }else if (useData.data.role === "admin") {
    window.location.href = "/admin/dashboard";
  }
  window.localStorage.setItem("token", useData.data.data);
  window.localStorage.setItem("id", useData.data.id);
  window.localStorage.setItem("userType", useData.data.role);
  window.localStorage.setItem("department", useData.data.department);
  window.localStorage.setItem("userName", useData.data.fullName);
};

export const fetchUserRegister = async (data) => {
  const useData = await axios.post("http://localhost:5000/register", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  if (useData.data.status === "ok") {
    window.location.href = "/login";
  }else{
    window.location.href = "/register"
  }
};

export const storeBook = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/storebook", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });

  console.log(useData);
  if (useData.data.status === "ok") {
  }
};

export const storeCourse = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/storecourse", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });

  console.log(useData);
  if (useData.data.status === "ok") {
    window.location.href = "/supervisor/dashboard"
  }
};

export const storeAnnouncement = async (data) => {
  const useData = await axios.post("http://localhost:5000/storeannouce", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  console.log(useData);
  if (useData.data.status === 'ok') {
    window.location.reload(true)
  }
};



export const storeQuestion = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/storequestion", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  

  console.log(useData);
  if (useData.data.status === "ok") {
    // window.location.href = "/login"; redirect it to where ever you want
  }
};

export const storeClass = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/storeClass", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  console.log(useData);
  if (useData.data.status === "ok") {
    window.location.href = "/teacher/dashboard"
  }
};

export const storeTodoList = async (data) => {
  console.log(data);
  const TodoList = await axios.post("http://localhost:5000/storeTodo", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  if (TodoList.data.status === "ok") {
    window.location.href = "/student/dashboard"; 
  }
};

export const fetchBook = async () => {
  const useData = await axios.get("http://localhost:5000/fetchbook");
  return useData.data;
};

export const fetchClass = async () => {
  const useData = await axios.get("http://localhost:5000/fetchclass");
  return useData.data;
};

export const fetchCourse = async () => {
  const useData = await axios.get("http://localhost:5000/fetchCourse");
  return useData
};


export const fetchAnnouncement = async () => {
  const useData = await axios.get("http://localhost:5000/fetchAnnouncement");
  return useData.data;
};
export const fetchTodoList = async () => {
  const useData = await axios.get("http://localhost:5000/fetchTodo");
  return useData.data;
};
