import { ISpecie } from "./Species.types";
import { ICharacter } from './Characters.types'


export interface IFilm {
    characters: string[] | ICharacter[];
    created: Date;
    director: string;
    edited: Date;
    episode_id: string;
    opening_crawl: string;
    planets: string[];
    producer: string;
    release_date: Date;
    species: string[] | ISpecie[];
    starships: string[];
    title: string;
    url: string;
    vehicles: string[];
  }