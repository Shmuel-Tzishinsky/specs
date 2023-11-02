// import { useReducer } from "react";
// import { INITIAL_STATE_SPECS, specsReducer } from "../../context/specs/specsReducer";
// import {
//   ADD_SPECS,
//   COMPLETE_SPECS,
//   DELETE_SPECS,
//   EDIT_SPECS,
//   LOADING_SPECS,
// } from "../../context/specs/specsTypes";
import SpecsBox from "./SpecsBox";

export function SpecsItem() {
  // const [state, dispatch] = useReducer(specsReducer, INITIAL_STATE_SPECS);

  // const addSpecs = () => {
  //   dispatch({
  //     type: LOADING_SPECS,
  //   });
  //   dispatch({
  //     type: ADD_SPECS,
  //     payload: {
  //       complete: false,
  //       title: new Date().getTime(),
  //       id: new Date().getTime(),
  //     },
  //   });
  // };

  // const editSpecs = (specs) => {
  //   dispatch({
  //     type: LOADING_SPECS,
  //   });
  //   dispatch({
  //     type: EDIT_SPECS,
  //     payload: {
  //       complete: specs.complete,
  //       title: new Date().getTime(),
  //       id: specs.id,
  //     },
  //   });
  // };

  // const deleteSpecs = (id) => {
  //   dispatch({
  //     type: LOADING_SPECS,
  //   });

  //   setTimeout(() => {
  //     dispatch({
  //       type: DELETE_SPECS,
  //       payload: {
  //         id: id,
  //       },
  //     });
  //   }, 5000);
  // };

  // const toggleSpecs = (id) => {
  //   dispatch({
  //     type: LOADING_SPECS,
  //   });

  //   dispatch({
  //     type: COMPLETE_SPECS,
  //     payload: {
  //       id: id,
  //     },
  //   });
  // };

  return (
    <div className="grid grid-cols-[70px_calc(100%_-_150px)_80px] pt-1 pr-2 pb-1 pl-2">
      <div className="my-4 text-xs relative before:absolute before:t-0 before:rounded-full before:bg-[#121231] before:w-[3px] before:h-[125%] before:right-[10.5px]  after:absolute after:t-0 after:bg-[#121231] after:w-[15px] after:h-[15px] after:right-[5px] after:rounded-full">
        11.11.11
      </div>
      <SpecsBox />
      <div className="flex items-center justify-center text-base">
        <div className="cursor-pointer hover:text-[#b0adad] ease-in-out">Delete</div>
      </div>
    </div>
  );
}
