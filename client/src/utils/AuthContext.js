import { createContext, useReducer, useEffect  } from "react";


// to see if localsotrage worked
// let user = null
// try {
//   JSON.parse(localStorage.getItem("user"))
// } catch {
//   console.log('No user stored in LocalStorage')
// }

const INITIAL_STATE = {
    //  check if user exsit in localStorage already, if yes the user already login 
    // user: JSON.parse(localStorage.getItem("user")) || null,
    user: localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin")) : null,
    loading: false,
    error: null, 
}

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null,
        };
        case "LOGIN_SUCCESS":
            return {
                user: action.data,
                loading: false,
                error: null,   
        };
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.data,
        };
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null,
        };
        case "REGISTER_START":
          return {
              user: null,
              loading: true,
              error: null,
      };
        case "REGISTER_SUCCESS":
        return {
            user: action.data,
            loading: false,
            error: null,
      };
        case "REGISTER_FAILURE":
        return {
            user: null,
            loading: false,
            error: action.data,
        };

        default: return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
    return (
      <AuthContext.Provider
        value={{
          user: state.user,
          loading: state.loading,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

  