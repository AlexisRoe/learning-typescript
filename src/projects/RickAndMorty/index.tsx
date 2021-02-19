import { useContext } from "react";
import "./index.css";
import { Store } from "./Store"

// context & Redux like approach

const RickAndMorty = (): JSX.Element => {
    const context = useContext(Store)

    return (
        <>
            <h2>Project 2: Rick and Morty</h2>
            <p>Pick your favorite episode!!!</p>
        </>
    )
}

export default RickAndMorty;