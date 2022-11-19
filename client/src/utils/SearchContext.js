import { createContext, useReducer, useEffect  } from "react";

const INITIAL_STATE = {
    userCarpark: "",
    lat: "",
    lng: ""  
}

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.paylaod;     
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default: 
            return state;
    }
};

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
  
    return (
      <SearchContext.Provider
        value={{
          userCarpark: state.userCarpark,
          lat: state.lat,
          lng: state.lng,
          dispatch,
        }}
      >
        {children}
      </SearchContext.Provider>
    );
  };

  