import { Link } from "react-router-dom";

import { MenuItem } from "@/types";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Rating from "@/components/ui/Rating";

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition duration-300 hover:-translate-y-1 hover:border-amber-500">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="h-64 w-full object-cover"
        />

        {item.featured && (
          <div className="absolute left-4 top-4">
            <Badge>Featured</Badge>
          </div>
        )}
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">
            {item.name}
          </h3>

          <span className="text-lg font-bold text-amber-400">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-neutral-400">
          {item.description}
        </p>

        <Rating value={item.rating} />

        <div className="flex items-center justify-between pt-2">
          <Link to={`/menu/${item.slug}`}>
            <Button variant="outline">
              View Details
            </Button>
          </Link>

          <Button>
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
};

export default MenuCard;
