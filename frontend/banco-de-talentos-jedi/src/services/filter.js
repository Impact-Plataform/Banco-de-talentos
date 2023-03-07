export default function filterCharacter(data, filterBy, parameter, callback ){
    const newData  = data.filter((element[filterBy] == parameter))
    callback(newData)
}