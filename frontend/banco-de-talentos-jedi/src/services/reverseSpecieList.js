function reverseList(name, list){
    const keys = Object.keys(list)
    const values = Object.values(list)
    return keys[values.indexOf(name)]
}

export default reverseList