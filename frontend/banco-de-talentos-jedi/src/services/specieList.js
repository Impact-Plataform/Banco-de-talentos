import axios from "axios";

// o código da linha 4 até a 18 foi utilizado para imprimir o objeto da const listOfSpecies (linha 20) no terminal, criando de maneira dinâmica o objeto.
// const list = {}

// function listOfSpecies(url){
//     axios.get(url).then((response)=>{
//         response.data.results.forEach(element => {
//             list[element.url] = element.name
//         })
//         console.log(list)
//     })
// }

// listOfSpecies("https://swapi.dev/api/species/")
// listOfSpecies("https://swapi.dev/api/species/?page=2")
// listOfSpecies("https://swapi.dev/api/species/?page=3")
// listOfSpecies("https://swapi.dev/api/species/?page=4")

const listOfSpecies = {
    'https://swapi.dev/api/species/31/': 'Besalisk',
    'https://swapi.dev/api/species/32/': 'Kaminoan',
    'https://swapi.dev/api/species/33/': 'Skakoan',
    'https://swapi.dev/api/species/34/': 'Muun',
    'https://swapi.dev/api/species/35/': 'Togruta',
    'https://swapi.dev/api/species/36/': 'Kaleesh',
    'https://swapi.dev/api/species/37/': "Pau'an",
    'https://swapi.dev/api/species/21/': 'Nautolan',
    'https://swapi.dev/api/species/22/': 'Zabrak',
    'https://swapi.dev/api/species/23/': 'Tholothian',
    'https://swapi.dev/api/species/24/': 'Iktotchi',
    'https://swapi.dev/api/species/25/': 'Quermian',
    'https://swapi.dev/api/species/26/': 'Kel Dor',
    'https://swapi.dev/api/species/27/': 'Chagrian',
    'https://swapi.dev/api/species/28/': 'Geonosian',
    'https://swapi.dev/api/species/29/': 'Mirialan',
    'https://swapi.dev/api/species/30/': 'Clawdite',
    'https://swapi.dev/api/species/11/': 'Neimodian',
    'https://swapi.dev/api/species/12/': 'Gungan',
    'https://swapi.dev/api/species/13/': 'Toydarian',
    'https://swapi.dev/api/species/14/': 'Dug',
    'https://swapi.dev/api/species/15/': "Twi'lek",
    'https://swapi.dev/api/species/16/': 'Aleena',
    'https://swapi.dev/api/species/17/': 'Vulptereen',
    'https://swapi.dev/api/species/18/': 'Xexto',
    'https://swapi.dev/api/species/19/': 'Toong',
    'https://swapi.dev/api/species/20/': 'Cerean',
    'https://swapi.dev/api/species/1/': 'Human',
    'https://swapi.dev/api/species/2/': 'Droid',
    'https://swapi.dev/api/species/3/': 'Wookie',
    'https://swapi.dev/api/species/4/': 'Rodian',
    'https://swapi.dev/api/species/5/': 'Hutt',
    'https://swapi.dev/api/species/6/': "Yoda's species",
    'https://swapi.dev/api/species/7/': 'Trandoshan',
    'https://swapi.dev/api/species/8/': 'Mon Calamari',
    'https://swapi.dev/api/species/9/': 'Ewok',
    'https://swapi.dev/api/species/10/': 'Sullustan'
}

export default listOfSpecies