export const actionTypes = {
  SET_BUDGET: "SET_BUDGET",
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_CHARACTER: "SET_CHARACTER",
  RESET_STATE: "RESET_STATE",
};

export const setBudget = (budget) => {
  return {
    type: actionTypes.SET_BUDGET,
    payload: { budget: budget },
  };
};

export const setCategories = (categories) => {
  return {
    type: actionTypes.SET_CATEGORIES,
    payload: { categories },
  };
};

export const setCharacter = (character) => {
  return {
    type: actionTypes.SET_CHARACTER,
    payload: { character },
  };
};

export const resetState = () => {
  return {
    type: actionTypes.RESET_STATE,
  };
};
