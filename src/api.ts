import axios from 'axios';
import Cookies from 'js-cookie';
import { TOKEN } from './app.constants';

const API_URL = 'https://gateway.scan-interfax.ru/api';

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${Cookies.get(TOKEN)}`,
	},
});