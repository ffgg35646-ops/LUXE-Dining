import { Link } from "react-router-dom";

import { menu } from "@/data/menu";
import MenuCard from "@/components/menu/MenuCard";
import Button from "@/components/ui/Button";

const FeaturedDishes = () => {
  const featuredItems = menu.filter((item) => item.featured).slice(0, 6);

  return (
    <section className="bg-neutral-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Signature Menu
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Featured Dishes
            </h2>

            <p className="mt-4 max-w-2xl text-neutral-400">
              Explore our chef's hand-picked selection of premium dishes,
              crafted with the finest ingredients and exceptional attention
              to detail.
            </p>
          </div>

          <Link to="/menu">
            <Button variant="outline">
              View Full Menu
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {featuredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
