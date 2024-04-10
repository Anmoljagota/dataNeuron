import NavBar from "./components/Navbar";
import SecondTask from "./components/Secondtask/SecondTask";
import ParentComponent from "./components/First_task/ParentComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ParentComponent />}></Route>
          <Route path="/resize" element={<ParentComponent />}></Route>
          <Route path="/crud" element={<SecondTask />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
