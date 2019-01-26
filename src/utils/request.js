import axios from 'axios'
import {Promise} from 'es6-promise'
import router from '../../src/router'

axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://101.132.161.133:5000/api/v0/'
// axios.defaults.baseURL = 'http://127.0.0.1:5000/api/v0/'

axios.interceptors.request.use(
	config => {
		const token = sessionStorage.getItem("token")
		if (token) {
			config.headers.Authorization = "Bearer "+ token
		}
		return config
	},
	err => {
		return Promise.reject(err)
	}
)

axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		if(error.response.status === 401) {
			router.push({path: '/'})
		}
		return Promise.reject(error.response.data)
	});

export default axios;