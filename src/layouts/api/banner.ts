import { useQuery } from '@tanstack/react-query';
import { jaiaApi, QueryConfig } from '../../lib';
import { BannerData } from '../types';

const url = '/banners';

function banner(): Promise<BannerData[]> {
  return jaiaApi.get(url);
}

type QueryFn = typeof banner;

type UseBannerParams = {
  config?: QueryConfig<QueryFn>;
};

export const useBanner = ({ config }: UseBannerParams = {}) => {
  return useQuery({
    ...config,
    queryFn: banner,
    queryKey: ['banner'],
  });
};
