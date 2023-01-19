import api from './api';

async function getAllEndpoint(endpoint) {
    try {
        let results = [];
        const response = await api.get(endpoint);
        const responseData = await response.data;

        const items = responseData.count;
        const elementsPerPage = responseData.results.length;

        const numberOfPages = Math.floor(
            (items + elementsPerPage - 1) / elementsPerPage,
        );

        let promises = [];

        for (let i = 2; i <= numberOfPages; i++) {
            const response = await api.get(`${endpoint}?page=${i}`);
            promises.push(response);
        }
        results = await Promise.all(
            promises.reduce(
                (acc, data) => [...acc, ...data.data.results],
                responseData.results,
            ),
        );
        return results;
    } catch (error) {}
}

export default getAllEndpoint;
