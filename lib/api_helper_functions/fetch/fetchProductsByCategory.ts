import { env } from '@/lib/env';
import { Product } from '@/types';

export const fetchProductsByCategory = async ({
  category,
  signal,
  limit,
}: {
  category: string;
  signal?: AbortSignal;
  limit?: number;
}) => {
  try {
    const response = await fetch(
      limit
        ? `${env.NEXT_PUBLIC_FAKESTORE_API_KEY}/products/category/${category}?limit=${limit}`
        : `${env.NEXT_PUBLIC_FAKESTORE_API_KEY}/products/category/${category}`,
      {
        signal,
      },
    );
    if (!response.ok) {
      return {
        data: null,
        error: "Couldn't fetch products",
      };
    }

    const data: Product[] = await response.json();

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
