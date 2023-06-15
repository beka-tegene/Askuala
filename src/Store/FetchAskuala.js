import axios from "axios";

export const fetchUserLogin = async (data) => {
  console.log(data);
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

export const storeAnswers = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/storeAnswers", {
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


export const storeJoin = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/JoinClass", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  console.log(useData);
  if (useData.data.status === "ok") {
    // window.location.href = "/login"; redirect it to where ever you want
  }
};


export const storeMaterial = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/storeMaterials", {
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
export const fetchAnswer = async (data) => {
  console.log("Answer page");
  const useData = await axios.post("http://localhost:5000/fetchAnswer",{
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });
  console.log("the answer is",useData.data[0].Answer);
  return useData.data.Answer;
};
export const fetchUsers = async () => {

  console.log("users page");
  const useData = await axios.get("http://localhost:5000/fetchUsers",{
    ContentType: "application/json",
    Accept: "application/json",
  });
  return useData.data;
};
export const fetchQuestion = async () => {
  console.log("question  page");
  const useData = await axios.get("http://localhost:5000/fetchQuestion");
  console.log(useData.data);
  return useData.data;
};


export const removeUser = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/removeUser", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });

  
  

  console.log(useData);
  if (useData.data.status === "ok") {
    // window.location.href = "/login"; redirect it to where ever you want
  }
};

export const removeTodo = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/removeTodo", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });

  
  

  console.log(useData);
  if (useData.data.status === "ok") {
    // window.location.href = "/login"; redirect it to where ever you want
  }
};




export const removeClass = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/removeClass", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });

  
  

  console.log(useData);
  if (useData.data.status === "ok") {
    // window.location.href = "/login"; redirect it to where ever you want
  }
};


export const removeCourse = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/removeCourse", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });

  
  

  console.log(useData);
  if (useData.data.status === "ok") {
    // window.location.href = "/login"; redirect it to where ever you want
  }
};

export const removeAnnouncement = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/removeAnnouncement", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });

  
  

  console.log(useData);
  if (useData.data.status === "ok") {
    // window.location.href = "/login"; redirect it to where ever you want
  }
};

export const removeMaterial= async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/removeMaterial", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });

  
  

  console.log(useData);
  if (useData.data.status === "ok") {
    // window.location.href = "/login"; redirect it to where ever you want
  }
};

export const removeQA = async (data) => {
  console.log(data);
  const useData = await axios.post("http://localhost:5000/removeQA", {
    data,
    ContentType: "application/json",
    Accept: "application/json",
  });

  
  

  console.log(useData);
  if (useData.data.status === "ok") {
    // window.location.href = "/login"; redirect it to where ever you want
  }
};