import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useCategories } from '../layouts/api';
import { CardContainer, HeaderTitle } from '../components';

const CategoriesPage = () => {
  const { category_slug } = useParams<{ category_slug: string }>();
  const navigate = useNavigate();

  const { data: categories, isLoading } = useCategories();

  const category = categories?.find(
    (category) => category.slug === category_slug
  );

  const subcategory = category?.subcategories || [];

  useEffect(() => {
    if (!category) {
      navigate('/');
    }
  }, [category]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="pt-1 mb-28">
      <HeaderTitle title={category_slug || ''} className="uppercase" />

      <CardContainer
        list={subcategory}
        loading={isLoading}
        category_slug={category_slug}
      />
    </div>
  );
};

export default CategoriesPage;