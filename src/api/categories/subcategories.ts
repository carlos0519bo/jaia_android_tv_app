import { useQuery } from '@tanstack/react-query';
import { jaiaApi, QueryConfig } from '../../lib';
import { FeaturedContent } from '../featured/types';


const url = '/contents/';

function subcategories(slug: string): Promise<FeaturedContent[]> {
  return jaiaApi.get(url + slug);
}

type QueryFn = typeof subcategories;

type UseSubcategoriesParams = {
  config?: QueryConfig<QueryFn>;
  slug?: string;
};

export const useSubcategories = ({
  config,
  slug = '',
}: UseSubcategoriesParams = {}) => {
  return useQuery({
    ...config,
    queryFn: () => subcategories(slug),
    queryKey: ['subcategories', slug],
  });
};
