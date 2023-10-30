import SpecsIndex from "./component/specs/Index.jsx";
import NavBar from "./component/navBar/Index.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
const About = () => (
  <div
    style={{
      color: "#eee",
      fontSize: "6rem",
      margin: "2rem",
    }}
  >
    About Page
  </div>
);
const Blog = () => (
  <div
    style={{
      color: "#eee",
      fontSize: "6rem",
      margin: "2rem",
    }}
  >
    Blog Page
  </div>
);

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<SpecsIndex />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
