import { Link } from "react-router-dom";

import { chefs } from "@/data/chefs";
import Button from "@/components/ui/Button";

const ChefSection = () => {
  return (
    <section className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Our Experts
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Meet Our Master Chefs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-400">
            Our award-winning chefs combine passion, creativity, and
            world-class culinary techniques to create unforgettable dining
            experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {chefs.map((chef) => (
            <article
              key={chef.id}
              className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition duration-300 hover:-translate-y-2 hover:border-amber-500"
            >
              <img
                src={chef.image}
                alt={chef.name}
                className="h-80 w-full object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {chef.name}
                </h3>

                <p className="mt-2 text-amber-400">
                  {chef.position}
                </p>

                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  {chef.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/chefs">
            <Button size="lg">
              Meet All Chefs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
