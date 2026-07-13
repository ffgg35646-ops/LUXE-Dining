import { MenuItem } from "@/types";

import MenuCard from "@/components/ui/MenuCard";

interface MenuGridProps {
  items: MenuItem[];
}

const MenuGrid = ({ items }: MenuGridProps) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default MenuGrid;
