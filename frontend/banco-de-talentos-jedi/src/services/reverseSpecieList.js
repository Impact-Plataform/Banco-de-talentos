import listOfSpecies from "./specieList.js";

function reverseList(specieName){
    const keys = Object.keys(listOfSpecies)
    const values = Object.values(listOfSpecies)
    return keys[values.indexOf(specieName)]
}

export default reverseList