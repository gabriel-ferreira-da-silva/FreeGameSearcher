export interface Game{
    id: Number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date:string;
    freetogame_profile_url: string;
}

export interface GameSave{
    array:[Game];
}
