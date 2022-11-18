import { createContext, useReducer, useEffect  } from "react";

const INITIAL_STATE = {
    userCarpark: ""
      
}

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER_CARPARK":
            return {
             userCarpark: action.data
        };
       
        default: return state
    }
};

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
  
    return (
      <SearchContext.Provider
        value={{
          userCarpark: state.userCarpark,
          dispatch,
        }}
      >
        {children}
      </SearchContext.Provider>
    );
  };

  