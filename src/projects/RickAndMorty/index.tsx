import { useContext, useEffect } from "react";
import "./index.css";
import { Action, Episode } from "./interfaces";
import { Store } from "./Store"

const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";


const RickAndMorty = (): JSX.Element => {
    const { state, dispatch } = useContext(Store)

    useEffect(() => {
        const fetchDataAction = async () => {
            const result = await fetch(URL);
            const data = await result.json();
            return dispatch({ type: "FETCH_DATA", payload: data._embedded.episodes })
        }
        state.episodes.length === 0 && fetchDataAction();
    }, [dispatch, state.episodes.length])

    const toggleFavAction = (episodeID: number): Action => {
        if (state.favourites.includes(episodeID)) {
            return dispatch({type: "REM_FAV", payload: episodeID })
        }
        return dispatch({ type: "ADD_FAV", payload: episodeID })
    }

    return (
        <>
            <h2>Project 2: Rick and Morty</h2>
            <p>Pick your favorite episode!!!</p>
            <section>
                {state.episodes.map((episode: Episode) => {
                    return (
                        <div key={episode.id}>
                            <img src={episode.image.medium} alt={episode.name} />
                            <ul>
                                <li>Title: {episode.name}</li>
                                <li>Season: {episode.season}</li>
                                <li>Number: {episode.number}</li>
                            </ul>
                            <button style={{ backgroundColor: state.favourites.includes(episode.id) ? "pink" : "white"}} onClick={() => toggleFavAction(episode.id)}>{state.favourites.includes(episode.id) ? "💔" : "❤️"}</button>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default RickAndMorty;