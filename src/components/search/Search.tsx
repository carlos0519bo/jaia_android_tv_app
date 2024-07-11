import { useState } from 'react';
import { Search as LucideSearch, X } from 'lucide-react';
import { useSearch } from '../../api/search';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const { mutate: search } = useSearch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
    if (searchTerm.length === 0) return;
    search(searchTerm, {
      onSuccess: (data) => {
        navigate(`/search/${searchTerm}`, { state: { data } });
      },
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleClearInput = () => {
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control h-10">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="rounded-lg focus:outline-none"
            placeholder="Buscar"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <div className="flex gap-1">
            {searchTerm.length > 0 && (
              <button type="button" onClick={handleClearInput}>
                <X />
              </button>
            )}
            <button type="submit">
              <LucideSearch size={24} />
            </button>
          </div>
        </label>
      </div>
    </form>
  );
};
