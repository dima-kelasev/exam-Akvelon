import axios, { AxiosResponse } from 'axios';
import { Post } from '../types/Todos';

const URL = 'https://jsonplaceholder.typicode.com/posts/';

export const getPosts = (
  randomElement: number
): Promise<AxiosResponse<Post>> => {
  const client = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return client.get(`${URL}${randomElement}`);
};
