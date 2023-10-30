import SpecsIndex from "./component/specs/Index.jsx";
import NavBar from "./component/navBar/Index.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddNewSpecs from "./component/specs/addNewSpecs/index.jsx";
import "./App.css";

const Home = () => (
  <div
    style={{
      color: "#eee",
      fontSize: "6rem",
      margin: "2rem",
    }}
  >
    Home Page
  </div>
);
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
      <Router basename={import.meta.env.DEV ? "/" : "/specs/"}>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/specs" element={<SpecsIndex />} />
            <Route path="/specs/add-a-new-specs" element={<AddNewSpecs />} />

            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
