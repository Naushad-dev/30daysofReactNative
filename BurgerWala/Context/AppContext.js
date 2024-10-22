import { createContext } from "react";
import { useSharedValue } from "react-native-reanimated";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const scrollY = useSharedValue(0);

  return (
    <AppContext.Provider value={{ scrollY }}>{children}</AppContext.Provider>
  );
};
