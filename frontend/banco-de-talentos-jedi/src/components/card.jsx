import listOfSpecies from "../services/specieList.js"

const Card = ({name, species, height,mass, hair_color, skin_color,eye_color, birth_year, gender, films}) =>{
    let film = films.join("-")
    film = film.replace("https://swapi.dev/api/films/1/", "Episode IV: A New Hope")
    film = film.replace("https://swapi.dev/api/films/2/", "Episode V: The Empire Strikes Back")
    film = film.replace("https://swapi.dev/api/films/3/", "Episode VI: Return of the Jedi")
    film = film.replace("https://swapi.dev/api/films/4/", "Episode I: The Phantom Menace")
    film = film.replace("https://swapi.dev/api/films/5/", "Episode II: Attack of the Clones")
    film = film.replace("https://swapi.dev/api/films/6/", "Episode III: Revenge of the Sith")
    film = film.split("-")

    
    if(species != 0){
    return (
        <div className="card">
        <p><b>Character name: </b> {name}</p>
        <p><b> Birth Year: </b> {birth_year}* </p>
        <p><b>Height: </b>{height} centimeters</p> 
        <p><b>Mass: </b> {mass} kilograms </p>
        <p><b>Specie: </b> {listOfSpecies[species]} </p>
        <p><b>Gender: </b> {gender}</p>
        <p><b>Hair Color:</b> {hair_color} </p>
        <p><b>Skin Color: </b>{skin_color}</p>
        <p><b>Eye Color: </b>{eye_color}</p>
        <p><b>Movie Appearances: </b><br></br>{film[0]}  <br></br> {film[1]} <br></br> {film[2]} <br></br> {film[3]} <br></br> {film[4]} <br></br> {film[5]} <br></br> </p>
        </div>)
    }else{
        return (
            <div className="card">
            <p><b>Character name: </b> {name}</p>
            <p><b> Birth Year: </b> {birth_year}* </p>
            <p><b>Height: </b>{height} centimeters</p> 
            <p><b>Mass: </b> {mass} kilograms </p>
            <p><b>Specie: </b> Human </p>
            <p><b>Gender: </b> {gender}</p>
            <p><b>Hair Color:</b> {hair_color} </p>
            <p><b>Skin Color: </b>{skin_color}</p>
            <p><b>Eye Color: </b>{eye_color}</p>
            <p><b>Movie Appearances: </b><br></br>{film[0]}  <br></br> {film[1]} <br></br> {film[2]} <br></br> {film[3]} <br></br> {film[4]} <br></br> {film[5]} <br></br> </p>
        </div>)
    }
}

export default Card



