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
