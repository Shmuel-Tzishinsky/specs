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

export function Specs() {
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

  // const editSpecs = (space) => {
  //   dispatch({
  //     type: LOADING_SPECS,
  //   });
  //   dispatch({
  //     type: EDIT_SPECS,
  //     payload: {
  //       complete: space.complete,
  //       title: new Date().getTime(),
  //       id: space.id,
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
    <div className="specs-box">
      <div className="specs-date">11.11.11</div>
      <SpecsBox />
      <div className="specs-delete">Delete</div>
    </div>
  );
}
