import axios from "axios";


export const fetchUserLogin = async (data) => {
  // console.log(data);
  const email = data.email;
  const password = data.password;
  console.log(email, password);
  await axios.post("http://localhost:5000/login-user", {
    email,
    password,
    ContentType: "application/json",
    Accept: "application/json",
  });
};

export const fetchUserRegister = async (data) => {
  // console.log(data);
  const FullName = data.FullName;
  const email = data.email;
  const password = data.password;
  const cpassword = data.cPassword;
  await axios.post("http://localhost:5000/register", {
    email,
    FullName,
    password,
    cpassword,
    ContentType: "application/json",
    Accept: "application/json",
  });
};

export const fetchTodoList = async (data) => {
  console.log(data);
};
