import { Link } from "react-router-dom";

import { menu } from "@/data/menu";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";

const Gallery = () => {
  return (
    <>
      <PageHeader
        title="Food Gallery"
        subtitle="Discover the artistry behind every dish served at LUXE Dining."
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menu.map((item) => (
              <figure
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <figcaption className="p-5">
                  <h2 className="text-xl font-semibold text-white">
                    {item.name}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-sm text-neutral-400">
                    {item.description}
                  </p>

                  <p className="mt-4 text-lg font-bold text-amber-400">
                    ${item.price.toFixed(2)}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/menu">
              <Button size="lg">
                Explore Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
