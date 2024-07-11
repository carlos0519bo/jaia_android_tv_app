import { useMutation } from '@tanstack/react-query';
import { jaiaApi, MutationConfig } from '../../lib';
import { Categories } from '../types';

const url = '/search?title=';

function search(title: string): Promise<Categories[]> {
  return jaiaApi.get(url + title);
}

type MutationFn = typeof search;

type SearchParams = {
  config?: MutationConfig<MutationFn>;
};

export const useSearch = ({ config = {} }: SearchParams = {}) => {
  return useMutation({
    mutationFn: search,
    ...config,
  });
};
