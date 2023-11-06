import { Product } from '../types';
import { Response } from '../types';

async function getCards(options: {
  baseUrl: string;
  path: string;
  searchTerm?: string;
  limit?: number;
  offset?: number;
}): Promise<Product[]> {
  const url = `${options.baseUrl}${options.path}/search?q=${options.searchTerm || ''}&limit=${
    options.limit || 12
  }&skip=${options.offset || 0}`;
  const response: Response = await (await fetch(url)).json();
  return response.products;
}

export default getCards;
