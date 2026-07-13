import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury Restaurant"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-amber-400">
            Luxury Dining Experience
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Fine Dining
            <br />
            Crafted With Passion
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
            Discover a world of premium cuisine prepared by award-winning
            chefs using the finest ingredients in an unforgettable luxury
            atmosphere.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/menu">
              <Button size="lg">
                Explore Menu
              </Button>
            </Link>

            <Link to="/reservations">
              <Button
                variant="outline"
                size="lg"
              >
                Reserve a Table
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-amber-400">
                15+
              </h3>
              <p className="mt-2 text-neutral-400">
                Expert Chefs
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-400">
                120+
              </h3>
              <p className="mt-2 text-neutral-400">
                Signature Dishes
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-400">
                25K+
              </h3>
              <p className="mt-2 text-neutral-400">
                Happy Guests
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
