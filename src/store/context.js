import React from "react";
import { actionTypes } from "./actions";

export const initialState = {
  budget: null,
  categories: [],
  character: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_BUDGET: {
      return {
        ...state,
        budget: action.payload.budget,
      };
    }
    case actionTypes.SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload.categories,
      };
    }
    case actionTypes.SET_CHARACTER: {
      return {
        ...state,
        character: action.payload.character,
      };
    }
    case actionTypes.RESET_STATE: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const GiftFinderContext = React.createContext();

export const useGiftFinderContext = () => React.useContext(GiftFinderContext);
