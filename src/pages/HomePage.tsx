import { useFeaturedContents } from '../api/featured';
import { Card, HeaderTitle } from '../components';

const HomePage: React.FC = () => {
  const { data: featuredContents = [] } = useFeaturedContents();

  return (
    <div className="mb-28">
      <HeaderTitle title="LO MÁS VISTO" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {featuredContents.map((item) => (
          <Card
            key={item.id}
            data={item}
            to={`/player/${item.category.slug}/${item.subcategory.slug}/${item.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
