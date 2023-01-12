export interface CharacterTYPE {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
    image?: string;
    quote?: string;
    description?: string;
    film: string;
    data: any;
}

export interface FilterOptions {
	gender: string;
    species: string;
    film: string;
}


export interface CharacterDetails {
    name: string;
    quote: string;
    image: string;
    description: string;
}

export interface FilmType {
    name?: string;
    image?: string
}
export interface PropBackground {
    overlayEnabled: boolean;
}
