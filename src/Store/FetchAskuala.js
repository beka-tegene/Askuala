import axios from "axios";

export const fetchUserLogin = async (data) => {
  const useData = await axios.post("http://localhost:5000/login-user", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  if (useData.data.role === "Student") {
    window.location.href = "/student/dashboard";
  }else if (useData.data.role === "Teacher") {
    window.location.href = "/teacher/dashboard";
  }else if (useData.data.role === "Supervisor") {
    window.location.href = "/supervisor/dashboard";
  }else if (useData.data.role === "Admin") {
    window.location.href = "/admin/dashboard";
  }
  window.localStorage.setItem("token", useData.data.data);
  window.localStorage.setItem("id", useData.data.id);
  window.localStorage.setItem("gender", useData.data.role);
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

export const storebook = async (data) => {
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
  }
};

export const storeAnnouncement = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/storeannouce", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  


  console.log(useData);
  if (useData.data.status === 'ok') {
    // window.location.href = "/login"; redirect it to where ever you want 
  }
};



export const storequestion = async (data) => {
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
    // window.location.href = "/login"; redirect it to where ever you want
  }
};

export const storeTodoList = async (data) => {
  console.log(data);
  const TodoList = await axios.post("http://localhost:5000/storeTodo", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  console.log(TodoList);
  if (TodoList.data.status === "ok") {
    // window.location.href = "/login"; redirect it to where ever you want
  }
};

export const fetchBook = async () => {
  console.log("F");
  const useData = await axios.get("http://localhost:5000/fetchbook");
  console.log(useData);
  console.log("rrr");
  return useData.data;
};

export const fetchClass = async () => {
  console.log("fetch class");
  const useData = await axios.get("http://localhost:5000/fetchclass");
  console.log(useData);
  return useData.data;
};

export const fetchCourse = async () => {
  console.log("fetch Course");
  const useData = await axios.get("http://localhost:5000/fetchCourse");
  console.log(useData);
  return useData.data
};


export const fetchAnnouncement = async () => {
  console.log("announcement page");
  const useData = await axios.get("http://localhost:5000/fetchAnnouncement");
  console.log(useData);
  return useData.data;
};
export const fetchTodoList = async () => {
  console.log("todolist page");
  const useData = await axios.get("http://localhost:5000/fetchTodo");
  console.log(useData);
  return useData.data;
};
