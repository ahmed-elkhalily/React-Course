import { useQuery } from '@tanstack/react-query';

function getAllProducts() {
  const baseUrl = 'https://fakestoreapi.com/products';
  return fetch(baseUrl).then((res) => res.json());
}

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });
};
