import { createContext } from "react";

// types
type ProviderProps = {
    children?: React.ReactNode
}

// interface
interface initState {
    episodes: [],
    favourites: []
}


const initialState:initState = {
    episodes: [],
    favourites: [],
};

const reducer = () => {
    
}

export const Store = createContext<initState>(initialState);

export const StoreProvider = ({children}: ProviderProps): JSX.Element => {
    return <Store.Provider value={initialState}>{children}</Store.Provider>
}
