import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "src/context/AuthReducer";

//最初のユーザー状態の定義
const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }: any) => {
  //ユーザー入力によって状態(state)が更新され、それをグローバルに利用している。
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //set user data in localstroge
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
