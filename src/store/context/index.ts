import { createContext, Dispatch, SetStateAction } from "react";
import User from "../../fake-backend/entity/user";

export interface UiContextType {
  theme: string;
  sidebar: boolean;
  user?: User | null;
}

export const UiContext = createContext<
  [UiContextType, Dispatch<SetStateAction<UiContextType>>] | undefined
>(undefined);
