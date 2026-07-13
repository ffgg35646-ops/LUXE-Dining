import { categories } from "@/data/categories";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

interface MenuFiltersProps {
  search: string;
  selectedCategory: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (category: string) => void;
  onReset: () => void;
}

const MenuFilters = ({
  search,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
  onReset,
}: MenuFiltersProps) => {
  return (
    <section className="mb-12 rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr_auto]">
        <Input
          placeholder="Search dishes..."
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(event) =>
            onCategoryChange(event.target.value)
          }
          className="rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none transition focus:border-amber-500"
        >
          <option value="all">
            All Categories
          </option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>

        <Button
          variant="outline"
          onClick={onReset}
        >
          Reset
        </Button>
      </div>
    </section>
  );
};

export default MenuFilters;
