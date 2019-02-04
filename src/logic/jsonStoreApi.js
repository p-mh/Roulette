import axios from 'axios';

import { KEY } from './auth';

const BASE_URL = 'https://www.jsonstore.io/';

export const fetchNames = () => {
  return axios.get(`${BASE_URL}${KEY}/users/`);
};

export const addName = name => {
  return axios.post(`${BASE_URL}${KEY}/users/${Date.now()}`, { name });
};

export const deleteName = key => {
  return axios.delete(`${BASE_URL}${KEY}/users/${key}`);
};

export const putName = (key, newName) => {
  return axios.put(`${BASE_URL}${KEY}/users/${key}/name`, newName);
};
