import { Routes, Route } from "react-router-dom";
import Landing from "./Page/Landing";
import NotFound from "./Page/NotFound";
import SignIn from "./Page/Signin";
import SignUp from "./Page/Signup";
import DashboardAdmin from "./Page/Admin/DashboardAdmin";
import TransactionAdmin from "./Page/Admin/TransactionAdmin";
import Dashboard from "./Page/Client/Student/Dashboard";
import MyClass from "./Page/Client/Student/MyClass";
import ClassAvailable from "./Page/Client/Student/ClassAvailable";
import DashboardTeacher from "./Page/Client/Teacher/DashboardTeacher";
import HostedClass from "./Page/Client/Teacher/HostedClass";
import ClassAnnouncement from "./Page/Client/Teacher/ClassAnnouncement";
import Answer from "./Page/Client/Student/Answer";
import DashboardSuperVisor from "./Page/Client/SuperVisor/DashboardSuperVisor";

function App() {
  return (
    <Routes>
      <Route element={<Landing />} path="/" />
      <Route element={<SignIn />} path="/login" />
      <Route element={<SignUp />} path="/register" />

      <Route path="/student/dashboard" element={<Dashboard />} />
      <Route path="/student/my-class" element={<MyClass />} />
      <Route path="/student/available-class" element={<ClassAvailable />} />
      <Route path="/student/question-answer" element={<Answer />} />

      <Route path="/teacher/dashboard" element={<DashboardTeacher />} />
      <Route path="/teacher/hosted-class" element={<HostedClass />} />
      <Route path="/teacher/announcement/:_id" element={<ClassAnnouncement />} />

      <Route path="/supervisor/dashboard" element={<DashboardSuperVisor />} />

      <Route path="/admin/dashboard" element={<DashboardAdmin />} />
      <Route path="/admin/transaction" element={<TransactionAdmin />} />

      <Route element={<NotFound />} path="/*" />
    </Routes>
  );
}

export default App;
