import { useQuery } from '@tanstack/react-query';
import { jaiaApi, QueryConfig } from '../../lib';
import { Subcategory } from '../../types';


const url = '/subcategories';

function allSubcategories(): Promise<Subcategory[]> {
  return jaiaApi.get(url);
}

type QueryFn = typeof allSubcategories;

type UseAllSubcategoriesParams = {
  config?: QueryConfig<QueryFn>;
};

export const useAllSubcategories = ({
  config,
}: UseAllSubcategoriesParams = {}) => {
  return useQuery({
    ...config,
    queryFn: () => allSubcategories(),
    queryKey: ['all-subcategories'],
  });
};
