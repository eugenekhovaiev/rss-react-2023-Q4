import { Card } from '../types';
import { SearchResponse } from '../types';

async function getSearchResponse(baseUrl: string, path: string, search?: string, page?: number): Promise<Card[]> {
  const url = `${baseUrl}${path}?search=${search || ''}&page=${page || '1'}`;
  const response: SearchResponse = await (await fetch(url)).json();
  return response.results;
}

export default getSearchResponse;
