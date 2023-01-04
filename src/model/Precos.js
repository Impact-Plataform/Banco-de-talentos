let quotesHigh = document.querySelector('#high')
let quotesLow = document.querySelector('#low')
const optionsSelect = document.querySelector('#optionsSelect')
let internalExchangeRate = {}


async function products(){    
    const response = await fetch('http://localhost:3000/products')
     .then((data) => data.json())
     .catch((error) => console.log(error))     
     return response
}

products()

const url = `https://economia.awesomeapi.com.br/all/`

const quotes = async () => {    
    const response = await fetch(url)
     .then((data) => data.json())
     .catch((error) => console.log(error))    
     return response    
}

const init = async () => {
    const exchangeRateData = await quotes()
    internalExchangeRate = { ...exchangeRateData }

    const getOptions = selectedCurrency => Object.keys(exchangeRateData)
     .map(currency => `<option ${currency === selectedCurrency ? selected : ''}>${currency}</option>`)
       .join('')

    optionsSelect.innerHTML = getOptions()       
   
}
    
quotes()
init()

optionsSelect.addEventListener('input', async e => {

    const res = await products();

    priceHigh = res.map((item) => {
        return `${item.name}: 
          ${parseFloat(item.price).toFixed(1) * parseFloat(internalExchangeRate[e.target.value].high).toFixed(1)} <br>`
    });

    priceLow = res.map((item) => {
        return `${item.name}: 
          ${parseFloat(item.price).toFixed(1) * parseFloat(internalExchangeRate[e.target.value].low).toFixed(1)} <br>`
    });
   
   quotesHigh.innerHTML = `<h1>Maior Cotação </h1> ${priceHigh.join('')}`
   quotesLow.innerHTML = `<h1>Menor Cotação </h1> ${priceLow.join('')}`



   const createCache = () => {
      localStorage.setItem(optionsSelect.value, JSON.stringify(internalExchangeRate[e.target.value]))
    }  
   createCache();

}) 


















/* let internalExchangeRate = {};

btn.addEventListener('click', (e) => {
    e.preventDefault();
    showUserName()

    optionsSelect.addEventListener('input', async e => {
        precs = cotacao(getUrl())

    }) 
  
    


})



const localStorageTransaction = JSON.parse(localStorage.getItem('cotação'))
let transactions = localStorage.getItem('cotação') !== null ? localStorageTransaction : [];

const updateLocalStorage = () => {
    localStorage.setItem('cotação', JSON.stringify(transactions))
}


async function precos(){    
    const response = await fetch('http://localhost:3000/products')
     .then((data) => data.json())
     .catch((error) => console.log(error))     
     console.log(response)
     return response
}

precos()

const cotacao = async url => {    
    const response = await fetch(url)
     .then((data) => data.json())
     .catch((error) => console.log(error))     
     console.log(response)
     return response
}



const euroDolar = async () =>{ 
    const exchangeRateData = await cotacao(getUrl('ARS'))

    internalExchangeRate = {...exchangeRateData}
   
    const options = Object.keys(exchangeRateData)
    .map(currency => `<option selected>${currency}</option>`)
     .join('')

     optionsSelect.innerHTML = options

}

euroDolar()

 

async function showUserName(){
    
    const user = await precos()

     prices = user.map((item) => {
        price.push(`${item.name}: ${item.price} \n`)
     })
}


 console.log(showUserName());




 */









/* const url = 'http://localhost:3000/products/'

const precos = async () =>{
    try{
      const response = await fetch(url)
      

     if(!response.ok){
        throw new Error('Sua conexão falhou')
     }

      const data = await response.json()
     
     
    if(data.result === 'error'){
        throw new Error ('Não foi possível obter as informações.')
    }

    } catch(err){
         console.log(err.message)
    }
}

precos()


async function getPrice(){

    const response = await precos();


    console.log(response)
}

getPrice()
export default getPrice */


  /* async function precos(){
      await fetch('http://localhost:3000/products')
    .then(function (responseData){
            return responseData.json();
    })
     .then(function (jsonData){
      for(let i = 0; i < jsonData.length; i++){
         price.push(jsonData[i].price);
      }
  })
    console.log(price)
}
 
precos()

  export default precos();
 */
/*     const precos = async () => {
        const response = await fetch(`http://localhost:3000/products`)
        const data = await response.json().then(function (jsonData){
          
            for(let i = 0; i < jsonData.length; i++){
               price.push(jsonData[i].price);
            }
        
            return price;
        
        
        })
          
     
    
    
        }
    
    */












/* const precos = async() => {

 

precos();

export default precos();      
            */

/* fetch('http://localhost:3000/products')
  .then(function(responseData){
          return responseData.json();
  })
   .then(function (jsonData){
        objToArr = jsonData.map(function(obj) {
                return Object.keys(obj).map(function(key) {
                    return obj[key];
                });
            });
            for(let i = 0; i < objToArr.length; i++){
                for(let j = 0; j < objToArr[i].length; j++){
                   if(j == 2){
                        prices.push(objToArr[i][j])
                   }
                }
                
            }
            return prices;

          }
)

}

arrPrices();

export default arrPrices();
 */




