import API_DATA from '../consts/API_DATA';
import { Product } from '../types';

async function getProductResp(options: { baseUrl?: string; path?: string; id: number }): Promise<Product> {
  const url = `${options.baseUrl || API_DATA.baseUrl}${options.path || API_DATA.path}/${options.id}`;
  return await (await fetch(url)).json();
}

export default getProductResp;
