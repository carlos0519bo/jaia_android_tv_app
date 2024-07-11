import { FeaturedContent } from '../../api/featured/types';
import { Categories } from '../../layouts/types';
import { cn } from '../../utils';
import { Card } from '../card';

type CardContainerProps<List> = {
  list: List[];
  loading?: boolean;
  toPlay?: boolean;
  category_slug?: string;
};

export const CardContainer = ({
  list,
  loading = false,
  toPlay = false,
  category_slug,
}: CardContainerProps<FeaturedContent | Categories>) => {

  return (
    <>
      {loading ? (
        <CardContainerSkeleton />
      ) : (
        <div
          className={cn(
            'grid grid-cols-1 gap-4 md:grid-cols-4'
          )}
        >
          {list.map((item) => (
            <Card
              key={item.id}
              data={item}
              toPlay={toPlay}
              category_slug={category_slug}
            />
          ))}
        </div>
      )}
    </>
  );
};

const CardContainerSkeleton = () => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3'
      )}
    >
      {[...Array(6)].map((_, index) => (
        <div className="flex flex-col gap-4 w-full" key={index}>
          <div className="skeleton h-64 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};
