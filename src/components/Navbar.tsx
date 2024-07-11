import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { cn } from '../utils';
import { useCategories } from '../layouts/api';
import { BackButton } from './button';
import { Search } from './search';

export const Navbar = () => {
  const [selected, setSelected] = useState('/');
  const { data: categoriesData = [] } = useCategories();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isSearchPage = pathname.startsWith('/search');

  const categories = [{ title: 'Destacados', slug: '/' }, ...categoriesData];

  useEffect(() => {
    const pathParts = pathname.split('/');
    if (pathname === '/') {
      setSelected('/');
    } else if (pathParts[1] === 'category') {
      setSelected(pathParts[2]);
    } else {
      setSelected(pathParts[1]);
    }
  }, [pathname]);

  const handleSelect = (slug: string) => {
    setSelected(slug);
    if (slug === '/') {
      navigate('/');
    } else {
      navigate(`/category/${slug}`);
    }
  };

  const isSelected = (categorySlug: string) => {
    if (categorySlug === '/') {
      return selected === '/';
    }
    return pathname.startsWith(`/category/${categorySlug}`);
  };

  return (
    <div className="flex flex-col py-4 px-4 w-full lg:px-20 xl:px-0 xl:w-[1040px] mx-auto sticky top-0 z-[1] bg-[#1D242A]">
      <nav className="mb-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-1">{isSearchPage && <BackButton toHome />}</div>
          <div className="flex-1">
            <div className="flex justify-center">
              <Search />
            </div>
          </div>
          <div className="flex flex-1 justify-end items-center gap-2"></div>
        </div>
      </nav>
      {!isSearchPage && (
        <div className="overflow-x-auto no-scrollbar">
          <div className=" flex whitespace-nowrap gap-4">
            {categories.map((category) => (
              <div
                className={cn(
                  'h-10 px-2 flex justify-center items-center rounded-lg cursor-pointer',
                  isSelected(category.slug) &&
                    'bg-opacity-45 bg-gray-600 text-white'
                )}
                key={category.title}
                onClick={() => handleSelect(category.slug)}
              >
                <span
                  className={cn(
                    'uppercase',
                    isSelected(category.slug) && 'font-semibold'
                  )}
                >
                  {category.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
