import axios from 'axios';
import { User } from '../types';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  const url = `${baseUrl}/users`;
  const response = await axios.get<User[]>(url);
  return response.data;
};

export const getUser = async (id: number) => {
  const url = `${baseUrl}/users/${id}`;
  const response = await axios.get<User>(url);
  return response.data;
};
