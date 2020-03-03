import axios from 'axios';

// TODO: 
// 1. set baseURL

export const axioxWithAuth = () => {
  return axios.create({
    baseURL: 'https://use-my-tech-stuff-3.herokuapp.com',
    headers: {
      "content-Type": "application/json",
      Authorization: localStorage.getItem('token')
    }
  })
}