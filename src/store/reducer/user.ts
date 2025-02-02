import { CatRepository } from "../../fake-backend/repository/cat";
import { UserRepository } from "../../fake-backend/repository/user";

const initialStateCat = {
  cat_id: Date.now(),
  name: "my-cat",
  position: {
    x: "0px",
    y: "0px",
  },
  width: "500px",
  height: "500px",
  options: {
    eyeColor: "#030075",
    eyeBorrowColor: "#030075",
    headColor: "#434ff2",
    bodyColor1: "#ffac42",
    bodyColor2: "#FFFFFF",
    patternColor: "#e57c35",
    strokeColor: "#030075",
  },
} as CatRepository;

export interface UserAction {
  type: string;
  payload?: any;
  id?: number;
  key?: string;
}

export const userReducer = (
  state: UserRepository,
  action: UserAction
): UserRepository => {
  const state_ = { ...state };
  switch (action.type) {
    case "NEW_CAT":
      state_.cats.push(initialStateCat as CatRepository);
      return state_;

    case "EDIT_CAT":
      if (typeof action.id === "number" && state_.cats[action.id]) {
        const cats = [...state_.cats];
        const current = cats[action.id];

        if (action.key && action.key in current) {
          cats[action.id] = {
            ...current,
            [action.key]: { ...current[action.key], ...action.payload },
          };
        } else {
          cats[action.id] = { ...current, ...action.payload };
        }

        return { ...state_, cats };
      }

      return state_;

    case "SELECT_CAT":
      state_.selected = action.payload.index;
      return state_;
  }

  return state;
};
