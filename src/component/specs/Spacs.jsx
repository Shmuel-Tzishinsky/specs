import { NavLink } from "react-router-dom";
import { SpecsItem } from "./SpecsItem";

export function Specs() {
  return (
    <div className="w-full min-h-full bg-[#21213E] text-[#eee]">
      {/* ADD NRE SPECS */}
      <div className="flex pt-12 pr-12 pb-4 pl-[95px]">
        <NavLink
          to={"/specs/add-a-new-specs"}
          className={
            "bg-[#F4C927] text-[#0A0A1B] flex rounded-[3px] p-[2px] font-sans text-[.8rem] active: hover:opacity-70 ease-in-out"
          }
        >
          <div className="text-[#121231] pt-2 pb-2 pr-3 pl-3 font-medium">Add A New Spec</div>
          <div className="p-0 bg-[#121231] text-[#FFEB3B] w-14 flex justify-center items-center text-center rounded-[3px] text-2xl">
            +
          </div>
        </NavLink>
      </div>
      {/* SPECS COMPONENT */}
      <div className="h-[calc(100vh_-_104px)] w-full overflow-auto scrollbar-10">
        <SpecsItem />
        <SpecsItem />
        <SpecsItem />
        <SpecsItem />
        <SpecsItem />
        <SpecsItem />
      </div>
    </div>
  );
}
