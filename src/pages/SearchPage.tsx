import { useLocation, useParams } from 'react-router-dom';
import { CardContainer, HeaderTitle } from '../components';

const SearchPage = () => {
  const { query } = useParams<{ query: string }>();
  const location = useLocation();

  const data = location.state;

  const title =  data?.data.length > 0 ? 'Resultados de: ' : 'No hay resultados con: ';

  return (
    <div className="mb-28">
      <HeaderTitle title={title + query || ''} />
      <CardContainer list={data.data} toPlay />
    </div>
  );
};

export default SearchPage;