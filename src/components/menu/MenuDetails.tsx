import { MenuItem } from "@/types";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Rating from "@/components/ui/Rating";

interface MenuDetailsProps {
  item: MenuItem;
}

const MenuDetails = ({ item }: MenuDetailsProps) => {
  return (
    <section className="grid gap-12 lg:grid-cols-2">
      <div className="overflow-hidden rounded-3xl">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center">
        <div className="mb-5 flex items-center gap-3">
          <Badge>{item.categoryId}</Badge>

          {item.featured && (
            <Badge variant="warning">
              Chef's Choice
            </Badge>
          )}
        </div>

        <h1 className="text-4xl font-bold text-white">
          {item.name}
        </h1>

        <div className="mt-5">
          <Rating
            value={item.rating}
            size="lg"
          />
        </div>

        <p className="mt-8 text-lg leading-8 text-neutral-300">
          {item.description}
        </p>

        <div className="mt-10 flex items-center justify-between border-y border-neutral-800 py-6">
          <div>
            <p className="text-sm uppercase tracking-wide text-neutral-500">
              Price
            </p>

            <p className="mt-2 text-3xl font-bold text-amber-400">
              ${item.price.toFixed(2)}
            </p>
          </div>

          <Button size="lg">
            Add to Cart
          </Button>
        </div>

        {item.ingredients.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Ingredients
            </h3>

            <div className="flex flex-wrap gap-3">
              {item.ingredients.map((ingredient, index) => (
                <Badge
                  key={`${ingredient.name ?? ingredient}-${index}`}
                  variant="secondary"
                >
                  {ingredient.name ?? ingredient}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuDetails;
