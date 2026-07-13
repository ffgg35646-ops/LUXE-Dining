import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { menu } from "@/data/menu";

import PageHeader from "@/components/layout/PageHeader";
import MenuDetailsComponent from "@/components/menu/MenuDetails";
import EmptyState from "@/components/ui/EmptyState";

const MenuDetails = () => {
  const { slug } = useParams();

  const item = useMemo(
    () => menu.find((dish) => dish.slug === slug),
    [slug]
  );

  if (!item) {
    return (
      <>
        <PageHeader
          title="Dish Not Found"
          subtitle="The requested menu item could not be found."
        />

        <section className="bg-neutral-950 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <EmptyState
              title="Dish Not Found"
              message="The dish you are looking for may have been removed or the URL is incorrect."
            />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title={item.name}
        subtitle={item.description}
        backgroundImage={item.image}
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <MenuDetailsComponent item={item} />
        </div>
      </section>
    </>
  );
};

export default MenuDetails;
