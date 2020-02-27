import axios from 'axios';

// TODO: 
// 1. set baseURL

export const axioxWithAuth = () => {
  return axios.create({
    baseURL: 'baseURL',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
}