import { testimonials } from "@/data/testimonials";

import Rating from "@/components/ui/Rating";

type Testimonial = {
  id: string | number;
  name: string;
  image: string;
  location: string;
  rating: number;
  comment: string;
};

const Testimonials = () => {
  return (
    <section className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            What Our Guests Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-400">
            Thousands of guests have enjoyed unforgettable dining experiences
            with us. Here are some of their stories.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {(testimonials as Testimonial[]).map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8"
            >
              <div className="mb-5 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-neutral-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <Rating
                value={testimonial.rating}
                showValue={false}
              />

              <p className="mt-6 leading-8 text-neutral-300">
                "{testimonial.comment}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
