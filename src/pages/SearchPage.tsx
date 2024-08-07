import { useLocation, useParams } from 'react-router-dom';
import { Card, HeaderTitle } from '../components';
import { FeaturedContent } from '../api/featured/types';
import { useAllSubcategories } from '../api/subcategories';
import { useCategories } from '../layouts/api';
import { Categories } from '../layouts/types';
import { Subcategory } from '../types';

const SearchPage = () => {
  const { query } = useParams<{ query: string }>();
  const { state } = useLocation();
  const data = (state?.data as FeaturedContent[]) || [];
  const { data: subcategories } = useAllSubcategories();
  const { data: categories } = useCategories();

  const title =
    data?.length > 0 ? 'Resultados de: ' : 'No hay resultados con: ';

  const getSubcategorySlug = (subcategoryId: number): string => {
    const subcategory = subcategories?.find(
      (sub: Subcategory) => sub.id === subcategoryId
    );
    return subcategory?.slug || '';
  };

  const getCategorySlug = (categoryId: number): string => {
    const category = categories?.find(
      (cat: Categories) => cat.id === categoryId
    );
    return category?.slug || '';
  };

  return (
    <div className="mb-28">
      <HeaderTitle title={title + query || ''} />

      <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item: FeaturedContent) => {
          const subcategorySlug = getSubcategorySlug(item.subcategory_id);
          const categorySlug = getCategorySlug(item.category_id);
          return (
            <Card
              key={item.id}
              data={item}
              to={`/player/${categorySlug}/${subcategorySlug}/${item.slug}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;