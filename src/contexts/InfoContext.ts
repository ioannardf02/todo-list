import { createContext } from "react";

type InfoContextType = {
  completed: number;
  totaldo: number;
};
export const InfoContext = createContext<InfoContextType>({
  completed: 0,
  totaldo: 0,
});
