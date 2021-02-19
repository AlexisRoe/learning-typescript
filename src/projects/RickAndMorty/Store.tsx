import { createContext, useReducer } from "react";
import { initialState } from "./constants";
import { Action, Episode, initState } from "./interfaces";
import {ProviderProps} from "./types"


const reducer = (state: initState, action: Action): initState => {
    switch (action.type) {
        case "FETCH_DATA":
            return { ...state, episodes: action.payload };
        case "ADD_FAV":
            return { ...state, favourites: [...state.favourites, action.payload] };
        case "REM_FAV":
            const favourites = [...state.favourites].filter((element:Episode) => element !== action.payload)
            return { ...state, favourites};
        default:
            return state;
    }

}

export const Store = createContext<initState | any>(initialState);

export const StoreProvider = ({ children }: ProviderProps): JSX.Element => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
