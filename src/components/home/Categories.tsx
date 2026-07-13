import { Link } from "react-router-dom";

import { categories } from "@/data/categories";
import Button from "@/components/ui/Button";

const Categories = () => {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Our Menu
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Browse Food Categories
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-400">
            From premium steaks to handcrafted desserts, discover
            a carefully curated collection of exceptional dishes.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-amber-500"
            >
              <h3 className="text-xl font-semibold text-white">
                {category.name}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-400">
                {category.description}
              </p>

              <div className="mt-6">
                <Link to={`/menu?category=${category.id}`}>
                  <Button variant="outline">
                    Explore
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
