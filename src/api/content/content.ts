import { useQuery } from '@tanstack/react-query';
import { jaiaApi, QueryConfig } from '../../lib';
import { FeaturedContent } from '../featured/types';

const url = '/content/';

function content(slug: string): Promise<FeaturedContent> {
  return jaiaApi.get(url + slug);
}

type QueryFn = typeof content;

type UseContentParams = {
  config?: QueryConfig<QueryFn>;
  slug?: string;
};

export const useContent = ({ config, slug = '' }: UseContentParams = {}) => {
  return useQuery({
    ...config,
    queryFn: () => content(slug),
    queryKey: ['content', slug],
  });
};
