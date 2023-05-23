import { Routes, Route } from "react-router-dom";
import Landing from "./Page/Landing";
import NotFound from "./Page/NotFound";
import SignIn from "./Page/Signin";
import SignUp from "./Page/Signup";

function App() {
  return (
    <Routes>
      <Route element={<Landing />} path="/" />
      <Route element={<SignIn />} path="/login" />
      <Route element={<SignUp />} path="/register" />
      <Route element={<NotFound />} path="/*" />
    </Routes>
  );
}

export default App;
