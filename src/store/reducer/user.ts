import { CatRepository } from "../../fake-backend/repository/cat";
import { UserRepository } from "../../fake-backend/repository/user";

export const user = (
  state: UserRepository,
  action: { type: string; payload: any; id?: number }
) => {
  switch (action.type) {
    case "NEW_CAT":
      state.cats.push(action.payload as CatRepository);
      return state;

    case "EDIT_CAT":
      if (action.id) state.cats.splice(action.id, 1, action.payload);
      return state;
  }
};
