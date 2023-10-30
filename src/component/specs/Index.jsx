import { Specs } from "./Specs";
import "./specs.css";

export default function SpaceIndex() {
  return (
    <div className="specs-container">
      {/* ADD NRE SPECS */}
      <div className="add-new-spec">
        <button type="button">
          <p>Add A New Specs</p>
          <div className="icon">+</div>
        </button>
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
