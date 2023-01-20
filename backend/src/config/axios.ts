import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'https://economia.awesomeapi.com.br'
});