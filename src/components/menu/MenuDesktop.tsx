import { Categories } from "../../layouts/types";


type MenuDesktopProps = {
  categories: Categories[];
};

export const MenuDesktop = ({ categories = [] }: MenuDesktopProps) => {
  return (
    <div className="flex gap-4">
      {categories.map((category) => (
        <button
          className="btn btn-outline uppercase"
          key={category.id}
          // onClick={() =>
          //   routerManager.to({
          //     name: 'Categories',
          //     params: { category_slug: category.slug },
          //   })
          // }
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};
