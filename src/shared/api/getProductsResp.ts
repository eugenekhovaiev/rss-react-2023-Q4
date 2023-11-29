import API_DATA from '../consts/API_DATA';
import INITIAL_CARDS_PER_PAGE from '../consts/INITIAL_CARDS_ON_PAGE_COUNT';
import { Response } from '../types';

async function getProductsResp(options: {
  baseUrl?: string;
  path?: string;
  searchTerm?: string;
  limit?: string;
  offset?: string;
}): Promise<Response> {
  const url = `${options.baseUrl || API_DATA.baseUrl}${options.path || API_DATA.path}/search?q=${
    options.searchTerm || ''
  }&limit=${options.limit || INITIAL_CARDS_PER_PAGE}&skip=${options.offset || '0'}`;
  return await (await fetch(url)).json();
}

export default getProductsResp;
