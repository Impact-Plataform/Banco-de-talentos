const axios = require('axios');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 3600 });

const fetchEconomiaAPI = async () => {
	const response = await axios.get('https://economia.awesomeapi.com.br/all');
	return await response.data;
};

const getCurrencyData = async () => {
	const data = cache.get('apiData');
	if (!data) {
		const apiData = await fetchEconomiaAPI();
		cache.set('apiData', apiData);
		return apiData;
	}
	return data;
};

const assignUsdAndEur = async (object, objectPrice) => {
	const data = await getCurrencyData();
	const usd = +(objectPrice / +data.USD.bid).toFixed(2);
	const eur = +(objectPrice / +data.EUR.bid).toFixed(2);
	return {
		...object,
		priceUSD: usd,
		priceEUR: eur
	};
};

module.exports = {
	fetchEconomiaAPI,
	getCurrencyData,
	assignUsdAndEur
};
