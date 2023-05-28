import React from "react";

export interface IAuth {
  isAuth: boolean,
  setIsAuth: (isAuth: boolean) => void
}

export const Auth = React.createContext<IAuth | null>(null)