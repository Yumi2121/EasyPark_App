import { createContext, useContext } from "react";

export const StateContext = createContext();
// so that the StateContex can be used globally
export const useGlobalState = () => useContext(StateContext)