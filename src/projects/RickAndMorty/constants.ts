import { initState } from "./interfaces";

export const initialState: initState = {
    episodes: [],
    favourites: [],
};

export const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";