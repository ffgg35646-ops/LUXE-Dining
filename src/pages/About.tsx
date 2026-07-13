import { Link } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";

const About = () => {
  return (
    <>
      <PageHeader
        title="About LUXE Dining"
        subtitle="Where culinary excellence meets unforgettable experiences."
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury Restaurant"
              className="rounded-3xl object-cover shadow-2xl"
            />
          </div>

          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Our Story
            </span>

            <h2 className="mt-4 text-5xl font-bold text-white">
              Fine Dining Since 2012
            </h2>

            <p className="mt-8 leading-8 text-neutral-400">
              LUXE Dining was founded with one vision: creating a restaurant
              where exceptional cuisine, elegant atmosphere, and outstanding
              service come together to deliver a memorable dining experience.
            </p>

            <p className="mt-6 leading-8 text-neutral-400">
              Every ingredient is carefully selected, every dish is crafted
              with passion, and every guest is treated with genuine hospitality.
              Our team continuously innovates while preserving the timeless
              traditions of fine dining.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center">
                <h3 className="text-4xl font-bold text-amber-400">
                  15+
                </h3>

                <p className="mt-2 text-neutral-400">
                  Professional Chefs
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center">
                <h3 className="text-4xl font-bold text-amber-400">
                  25K+
                </h3>

                <p className="mt-2 text-neutral-400">
                  Happy Guests
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center">
                <h3 className="text-4xl font-bold text-amber-400">
                  120+
                </h3>

                <p className="mt-2 text-neutral-400">
                  Signature Dishes
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center">
                <h3 className="text-4xl font-bold text-amber-400">
                  4.9★
                </h3>

                <p className="mt-2 text-neutral-400">
                  Average Rating
                </p>
              </div>
            </div>

            <Link to="/reservations">
              <Button
                size="lg"
                className="mt-10"
              >
                Reserve Your Table
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
