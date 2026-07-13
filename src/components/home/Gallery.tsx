import { Link } from "react-router-dom";

import { menu } from "@/data/menu";
import Button from "@/components/ui/Button";

const Gallery = () => {
  const galleryItems = menu.slice(0, 8);

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Food Gallery
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            A Taste Before You Visit
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-400">
            Every dish is prepared with premium ingredients,
            artistic presentation, and exceptional attention
            to detail.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/gallery">
            <Button size="lg">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
