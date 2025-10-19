import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h1 className="font-bold">{categories.length}</h1>
      <div className="mt-5 gap-5">
        {categories.map((cat) => (
          <NavLink
            to={`category/${cat.id}`}
            className="flex flex-col items-center btn bg-base-100 border-0 hover:bg-base-200"
            key={cat.id}
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
