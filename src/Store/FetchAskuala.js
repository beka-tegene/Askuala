import axios from "axios";


export const fetchUserLogin = async (data) => {
  // console.log(data);
  // const email = data.email;
  // const password = data.password;
  // console.log(email, password);
  const useData = await axios.post("http://localhost:5000/login-user", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  })
  console.log(useData, "login");
  if (useData.data.role === 'student') {
    window.location.href = "/student/dashboard";
  }
  window.localStorage.setItem("token", useData.data.data);
  window.localStorage.setItem("id", useData.data.id);
  window.localStorage.setItem("gender", useData.data.role);
  window.localStorage.setItem("department", useData.data.department);
  window.localStorage.setItem("userName", useData.data.fullName);
  // .then((data) => {

  // var rool =data.data.role;
  // if(rool === "student"){
  //   window.location.href="/student/dashboard";
  // }
};

export const fetchUserRegister = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/register", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });


  console.log(useData);
  if (useData.data.status === 'ok') {
    window.location.href = "/login";
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
  if (useData.data.status === 'ok') {
    // window.location.href = "/login"; redirect it to where ever you want 
  }
};
// courseId
// CourseName
// Ects
// creadit hr
// lectureID
// course dept


export const storeCourse = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/storecourse", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });


  console.log(useData);
  if (useData.data.status === 'ok') {
    // window.location.href = "/login"; redirect it to where ever you want 
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


export const storeClass = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/storeClass", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });


  console.log(useData);
  if (useData.data.status === 'ok') {
    // window.location.href = "/login"; redirect it to where ever you want 
  }
};



export const fetchTodoList = async (data) => {
  console.log(data);
  const TodoList = await axios.post("http://localhost:5000/storeTodo", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  console.log(TodoList);
  if (TodoList.data.status === 'ok') {
    // window.location.href = "/login"; redirect it to where ever you want 
  } 

};


export const fetchBook = async () => {
  console.log("gsdsdgd");
  const useData = await axios.get("http://localhost:5000/fetchbook");
  console.log(useData);
  return useData.data
};

export const fetchClass = async () => {
  console.log("fetch class");
  const useData = await axios.get("http://localhost:5000/fetchclass");
  console.log(useData);
  return useData.data
};

export const fetchAnnouncement = async () => {
  console.log("announcement page");
  const useData = await axios.get("http://localhost:5000/fetchAnnouncement");
  console.log(useData);
  return useData.data
};
export const getTodoList = async () => {
  console.log("todolist page");
  const useData = await axios.get("http://localhost:5000/fetchTodo");
  console.log(useData);
  return useData.data
};
