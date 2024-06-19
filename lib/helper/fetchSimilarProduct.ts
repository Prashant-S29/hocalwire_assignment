import { fetchSingleProductById } from '../api_helper_functions/fetch/fetchSingleProductById';
import { fetchProductsByCategory } from '../api_helper_functions/fetch/fetchProductsByCategory';

export const fetchSimilarProduct = async (id: string, signal?: AbortSignal) => {
  const productData = await fetchSingleProductById(id, signal);
  if (!productData.data) {
    return {
      data: null,
      error: "Couldn't fetch similar product",
    };
  }
  const similarProducts = await fetchProductsByCategory({
    category: productData.data.category,
    signal,
    limit: 3,
  });
  return similarProducts;
};
