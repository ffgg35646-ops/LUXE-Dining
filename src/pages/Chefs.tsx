import { Link } from "react-router-dom";

import { chefs } from "@/data/chefs";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";

const Chefs = () => {
  return (
    <>
      <PageHeader
        title="Our Master Chefs"
        subtitle="Meet the talented professionals behind every unforgettable dining experience."
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {chefs.map((chef) => (
              <article
                key={chef.id}
                className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 transition duration-300 hover:-translate-y-2 hover:border-amber-500"
              >
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="h-80 w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {chef.name}
                  </h2>

                  <p className="mt-2 font-medium text-amber-400">
                    {chef.role}
                  </p>

                  <p className="mt-5 leading-7 text-neutral-400">
                    {chef.bio}
                  </p>

                  <div className="mt-8">
                    <Button
                      variant="outline"
                      fullWidth
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/reservations">
              <Button size="lg">
                Reserve a Table
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chefs;
