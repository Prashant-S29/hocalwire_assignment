import { env } from '@/lib/env';
import { Product } from '@/types';

export const fetchSingleProductById = async (
  id: string,
  signal?: AbortSignal,
) => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_FAKESTORE_API_KEY}/products/${id}`,
      {
        signal,
      },
    );
    if (!response.ok) {
      return {
        data: null,
        error: "Couldn't fetch product",
      };
    }

    const data: Product = await response.json();

    return {
      data: data,
      error: null,
    };
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return {
          data: null,
          error: 'Request timed out',
        };
      }
      return {
        data: null,
        error: error.message,
      };
    } else {
      return {
        data: null,
        error: 'An unknown error occurred',
      };
    }
  }
};
