/* eslint-disable no-case-declarations */

import { EDIT_SPECS, DELETE_SPECS, ADD_SPECS, COMPLETE_SPECS, LOADING_SPECS } from "./specsTypes";

export const INITIAL_STATE_SPECS = {
  loading: false,
  error: false,
  resError: "",
  specs: [
    // {
    //   title: "",
    //   content: "",
    //   users: [],
    //   date: "",
    //   isEdit: false,
    //   id: "",
    //   complete: false,
    // },
  ],
};

export const specsReducer = (state, { type, payload }) => {
  switch (type) {
    case LOADING_SPECS:
      return {
        ...state,
        loading: true,
      };
    case EDIT_SPECS:
      const specs = state.specs.map((specs) => {
        if (specs.id === payload.id) {
          return payload;
        }
        return specs;
      });

      return {
        ...state,
        specs: specs,
        loading: false,
      };

    case DELETE_SPECS:
      return {
        ...state,
        specs: state.specs.filter(({ id }) => id !== payload.id),
        loading: false,
      };

    case ADD_SPECS:
      return {
        ...state,
        specs: [...state.specs, payload],
        loading: false,
      };

    case COMPLETE_SPECS:
      const complete = state.specs.map((specs) => {
        if (specs.id === payload.id) {
          return {
            ...specs,
            complete: !specs.complete,
          };
        }
        return specs;
      });

      return {
        ...state,
        specs: complete,
        loading: false,
      };
  }
};
