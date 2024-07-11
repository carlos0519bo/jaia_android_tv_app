import { useLocation, useParams } from 'react-router-dom';
import { Card, HeaderTitle } from '../components';
import { useSubcategories } from '../api/categories';

const SubcategoryPage = () => {
  const location = useLocation();

  const { category_slug, subcategory_slug } = useParams<{
    category_slug: string;
    subcategory_slug: string;
  }>();

  const title = location.state?.title || '';

  const { data: subcategories } = useSubcategories({
    slug: subcategory_slug,
  });

  return (
    <div className="pt-1 mb-28">
      <HeaderTitle title={title || ''} className="uppercase" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {subcategories?.map((item) => (
          <Card
            key={item.id}
            data={item}
            to={`/player/${category_slug}/${subcategory_slug}/${item.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SubcategoryPage;
