import axios, { AxiosResponse } from 'axios';
import { ITrade } from '../models/trade';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (delay: number) => (response: AxiosResponse) => 
    new Promise<AxiosResponse>(resolve => setTimeout(()=> resolve(response), delay));

const requests = {
    get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
    delete: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody)

}

 const Trades = {
    list: (): Promise<ITrade[]> => requests.get('/Trades'),
    details: (id: string) => requests.get(`/Trades/${id}`),
    create: (trade: ITrade) => requests.post('/Trades', trade),
    update: (trade: ITrade) => requests.put(`/Trades/${trade.id}`, trade),
    delete: (id: string) => requests.delete(`/Trades/${id}`)   
 }

 export default {
     Trades
 }