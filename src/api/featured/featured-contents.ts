import { useQuery } from '@tanstack/react-query';
import { jaiaApi, QueryConfig } from '../../lib';
import { FeaturedContent } from './types';

const url = '/featured-contents';

function featuredContents(): Promise<FeaturedContent[]> {
  return jaiaApi.get(url);
}

type QueryFn = typeof featuredContents;

type UseFeaturedContentsParams = {
  config?: QueryConfig<QueryFn>;
};

export const useFeaturedContents = ({
  config,
}: UseFeaturedContentsParams = {}) => {
  return useQuery({
    ...config,
    queryFn: featuredContents,
    queryKey: ['featuredContents'],
  });
};
