import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import StudentPage from "./pages/StudentPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/student" element={<StudentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
