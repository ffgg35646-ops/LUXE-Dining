import { useMemo } from "react";

import { menu } from "@/data/menu";

import PageHeader from "@/components/layout/PageHeader";
import MenuGrid from "@/components/menu/MenuGrid";
import EmptyState from "@/components/ui/EmptyState";

const Wishlist = () => {
  const wishlistItems = useMemo(() => {
    return menu.filter((item) => item.featured).slice(0, 4);
  }, []);

  return (
    <>
      <PageHeader
        title="My Wishlist"
        subtitle="Save your favorite dishes and access them anytime."
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          {wishlistItems.length > 0 ? (
            <MenuGrid items={wishlistItems} />
          ) : (
            <EmptyState
              title="Your Wishlist is Empty"
              description="Browse our menu and add your favorite dishes to your wishlist."
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Wishlist;
