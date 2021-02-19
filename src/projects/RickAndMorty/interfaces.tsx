export interface Episode {
    id: number
    url: string,
    name: string,
    season: number,
    number: number,
    type: string,
    airdate: string,
    airtime: string,
    airstamp: string,
    runtime: number,
    image: {
        medium: string,
        original: string
    },
    summary: string,

}
export interface Action {
    type: string,
    payload: any,
}
export interface initState {
    episodes: Episode[],
    favourites: Episode[]
}