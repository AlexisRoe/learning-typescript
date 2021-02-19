import { useContext, useEffect } from "react";
import "./index.css";
import { Action, Episode } from "./interfaces";
import { Store } from "./Store"
import {URL} from "./constants"


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

    const isIncluded = (episode: Episode):boolean => {
        return state.favourites.includes(episode)
    }

    const toggleFavAction = (episode: Episode): Action => {
        if (isIncluded(episode)) {
            return dispatch({type: "REM_FAV", payload: episode })
        }
        return dispatch({ type: "ADD_FAV", payload: episode })
    }

    return (
        <>
            <h2>Project 2: Rick and Morty</h2>
            <p>Pick your favorite episode!!!</p>
            <section>
                {state.episodes.map((episode: Episode) => {
                    return (
                        <div key={episode.id} className="episode">
                            <img src={episode.image.medium} alt={episode.name} />
                            <ul>
                                <li>Title: {episode.name}</li>
                                <li>Season: {episode.season}</li>
                                <li>Number: {episode.number}</li>
                            </ul>
                            <button style={{ backgroundColor: isIncluded(episode) ? "pink" : "white"}} onClick={() => toggleFavAction(episode)}>{isIncluded(episode) ? "💔" : "❤️"}</button>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default RickAndMorty;