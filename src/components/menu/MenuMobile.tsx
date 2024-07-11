import { useLocation } from 'react-router-dom';

import { AlignLeft } from 'lucide-react';
import { Categories } from '../../layouts/types';
import { cn } from '../../utils';

type MenuMobileProps = {
  categories: Categories[];
};

export const MenuMobile = ({ categories = [] }: MenuMobileProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <AlignLeft size={26}/>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow shadow-slate-700/40 bg-base-100 rounded-box w-64"
        >
          {categories.map((category) => (
            <li
              key={category.id}
              className={cn(
                'my-1',
                currentPath === `/${category.slug}`
                  ? 'bg-white rounded-lg font-bold'
                  : ''
              )}
            >
              <span className="uppercase">{category.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
