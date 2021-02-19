import { createContext, useReducer } from "react";
import { initialState } from "./constants";
import { initState } from "./interfaces";
import { reducer } from "./reducer";
import {ProviderProps} from "./types"

export const Store = createContext<initState | any>(initialState);

export const StoreProvider = ({ children }: ProviderProps): JSX.Element => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
