import { Action, Episode, initState } from "./interfaces";

export const reducer = (state: initState, action: Action): initState => {
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