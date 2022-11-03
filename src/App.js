import "./App.css";
import SignUp from "./pages/SigUp/Sigup";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SignIn from "./pages/signInSide/SigIn";
import HomePage from "./pages/HomePage/HomePage";
import JobSubmitForm from "./pages/CreateJob/CreateJob";
import GuardedRoute from "./components/Auth/Session.guard";
// import cors from 'cors';

function App() {
  // App.use(cors());
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route path="/home" element={<HomePage component={GuardedRoute}/>} />
      <Route path="/form" element={<JobSubmitForm />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;

