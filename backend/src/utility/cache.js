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

module.exports = {
	fetchEconomiaAPI,
	getCurrencyData
};
