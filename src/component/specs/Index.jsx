import { NavLink } from "react-router-dom";
import { Specs } from "./Specs";
import "./specs.css";

export default function SpecsIndex() {
  return (
    <div className="specs-container">
      {/* ADD NRE SPECS */}
      <div className="add-new-spec">
        <NavLink to={"/specs/add-a-new-specs"} className={"add-a-new-specs-link"}>
          <p>Add A New Spec</p>
          <div className="icon">+</div>
        </NavLink>
      </div>
      {/* SPECS COMPONENT */}
      <div className="specs-layout">
        <Specs />
        <Specs />
        <Specs />
        <Specs />
        <Specs />
        <Specs />
      </div>
    </div>
  );
}
