import axios from 'axios'
import { isDev } from '../common/util'
import configureResponseError from './interceptors/response_error'
import configureTimeout from './interceptors/timeout'

let defaultData = {
  uid: '',
  token: '',
  timestamp: ''
}

export function setToken(data) {
  defaultData = {
    ...defaultData,
    ...data
  }
}

let baseUrl = 'https://newsapi.org/'

let newsUrl = 'https://newsapi.org/'
let newsKey = '2603c47d6d1349418888897b5ea3abac' //news



export const setApiBaseUrl = (newBase) => {
  baseUrl = newBase
}

axios.interceptors.response.use(null, configureResponseError)
axios.interceptors.request.use(configureTimeout, null)

axios.interceptors.response.use((response) => {
  if (isDev) {
    const api = new URL(response.config.url)
    console.log(api.pathname, response)
  }
  return response
}, error => {
  if (isDev) {
    const api = new URL(error.config.url)
    console.log(api.pathname, error)
  }
  return Promise.reject(error)
})

axios.defaults.timeout = 20000

export default class HttpUtils {

  static get(url) {
    let newUrl = baseUrl + url + '&apiKey=' + newsKey;
    console.log(newUrl)
    
    return axios.get(newUrl).then(response => response.data.articles)
  }

  static post(url, data) {
    url = baseUrl + url
    
    data = {
      ...defaultData,
      ...data
    }

    return axios.post(url, data)
      .then(response => response.data)
      .catch(error => console.dir(error))
  }
}
