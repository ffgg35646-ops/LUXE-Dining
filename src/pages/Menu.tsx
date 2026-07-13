import { useMemo, useState } from "react";

import { menu } from "@/data/menu";

import PageHeader from "@/components/layout/PageHeader";
import MenuFilters from "@/components/menu/MenuFilters";
import MenuGrid from "@/components/menu/MenuGrid";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredMenu = useMemo(() => {
    return menu.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" ||
        item.categoryId.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const handleReset = () => {
    setSearch("");
    setSelectedCategory("all");
  };

  return (
    <>
      <PageHeader
        title="Our Menu"
        subtitle="Explore our collection of premium dishes, handcrafted by our award-winning chefs."
      />

      <section className="bg-neutral-950 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <MenuFilters
            search={search}
            selectedCategory={selectedCategory}
            onSearchChange={setSearch}
            onCategoryChange={setSelectedCategory}
            onReset={handleReset}
          />

          <MenuGrid items={filteredMenu} />
        </div>
      </section>
    </>
  );
};

export default Menu;
