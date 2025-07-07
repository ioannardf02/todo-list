import { createContext } from "react";

type InfoContextType = {
  total: number;
  completed: number;
};

export const InfoContext = createContext<InfoContextType>({
  total: 0,
  completed: 0,
});
