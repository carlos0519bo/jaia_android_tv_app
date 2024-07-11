import { useQuery } from '@tanstack/react-query';
import { jaiaApi, QueryConfig } from '../../lib';
import { Categories } from '../types';

const url = '/categories';

function categories(): Promise<Categories[]> {
  return jaiaApi.get(url);
}

type QueryFn = typeof categories;

type UseCategoriesParams = {
  config?: QueryConfig<QueryFn>;
};

export const useCategories = ({ config }: UseCategoriesParams = {}) => {
  return useQuery({
    ...config,
    queryFn: categories,
    queryKey: ['categories'],
  });
};
