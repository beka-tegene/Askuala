import { Routes, Route } from "react-router-dom";
import Landing from "./Page/Landing";
import NotFound from "./Page/NotFound";
import SignIn from "./Page/Signin";
import SignUp from "./Page/Signup";
import DashboardAdmin from "./Page/Admin/DashboardAdmin";
import TransactionAdmin from "./Page/Admin/TransactionAdmin";
import Dashboard from "./Page/Client/Student/Dashboard";
import MyClass from "./Page/Client/Student/MyClass";

function App() {
  return (
    <Routes>
      <Route element={<Landing />} path="/" />
      <Route element={<SignIn />} path="/login" />
      <Route element={<SignUp />} path="/register" />

      <Route path="/student/dashboard" element={<Dashboard />} />
      <Route path="/student/my-class" element={<MyClass />} />

      <Route path="/admin/dashboard" element={<DashboardAdmin />} />
      <Route path="/admin/transaction" element={<TransactionAdmin />} />

      <Route element={<NotFound />} path="/*" />
    </Routes>
  );
}

export default App;
