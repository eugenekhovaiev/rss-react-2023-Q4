import { LoaderFunction } from 'react-router-dom';
import { Product } from '../../shared/types';
import getProductResp from '../../shared/api/getProductResp';

const loadCardDetails = (async ({ params }): Promise<Product> => {
  const { id } = params;
  if (!id) {
    throw new Error('No product with such ID');
  }
  const response = await getProductResp({ id: +id });
  return response;
}) satisfies LoaderFunction;

export default loadCardDetails;
