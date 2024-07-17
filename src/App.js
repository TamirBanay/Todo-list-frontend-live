import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Home from "./pages/home/HomePage";
import Login from "./pages/login/LoginPage";
import Register from "./pages/register/RegisterPage";
import Todo from "./pages/todo/TodoPage";
import { useRecoilState } from "recoil";
import { _currentUserId } from "./services/atom";

function App() {
  const { userId } = useParams();
  const [currentUserId, setCurrentUserId] = useRecoilState(_currentUserId);

  return (
    <div className="App">
      <Router basename="/Todo-list-frontend-live">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/:currentUserId/todo" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
