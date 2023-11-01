import { CardObj } from '../types';
import { SearchResponse } from '../types';

async function getCards(baseUrl: string, path: string, search?: string, page?: number): Promise<CardObj[]> {
  const url = `${baseUrl}${path}?search=${search || ''}&page=${page || '1'}`;
  const response: SearchResponse = await (await fetch(url)).json();
  return response.results;
}

export default getCards;
