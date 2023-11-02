import { Specs } from "./component/specs/Spacs.jsx";
import { NavBar } from "./component/navBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddNewSpecs } from "./component/specs/addNewSpecs/AddNewSpecs.jsx";
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
    <div className="grid grid-cols-[161px_calc(100%_-161px)] min-w-full min-h-screen bg-[#21213E] font-sans">
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/specs/"}>
        <NavBar />

        <div className="min-w-[calc(100%_-_161px)] h-auto">
          <Routes>
            <Route path="/" x element={<Home />} />
            <Route path="/specs" element={<Specs />} />
            <Route path="/specs/add-a-new-specs" element={<AddNewSpecs />} />

            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="*" element={<h1 className="m-8 text-5xl">Not Found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
