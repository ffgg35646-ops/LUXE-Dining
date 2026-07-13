import { useMemo } from "react";
import { Link } from "react-router-dom";

import { menu } from "@/data/menu";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import CartSummary from "@/components/cart/CartSummary";

const Cart = () => {
  const cartItems = useMemo(() => menu.slice(0, 3), []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <>
      <PageHeader
        title="Shopping Cart"
        subtitle="Review your selected dishes before checkout."
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-6 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 md:flex-row"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full rounded-xl object-cover md:w-48"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      {item.name}
                    </h2>

                    <p className="mt-3 text-neutral-400">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-400">
                      ${item.price.toFixed(2)}
                    </span>

                    <Button variant="outline">
                      Remove
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <CartSummary
            subtotal={subtotal}
            tax={subtotal * 0.1}
            deliveryFee={8}
            onCheckout={() => {}}
          />

          {cartItems.length === 0 && (
            <div className="lg:col-span-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-10 text-center">
              <h2 className="text-2xl font-semibold text-white">
                Your cart is empty
              </h2>

              <p className="mt-4 text-neutral-400">
                Start exploring our delicious menu and add your favorite
                dishes.
              </p>

              <Link to="/menu">
                <Button className="mt-8">
                  Browse Menu
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
