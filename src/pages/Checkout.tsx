import { FormEvent, useMemo, useState } from "react";

import { menu } from "@/data/menu";

import PageHeader from "@/components/layout/PageHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import CartSummary from "@/components/cart/CartSummary";

const Checkout = () => {
  const cartItems = useMemo(() => menu.slice(0, 3), []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(form);
  };

  return (
    <>
      <PageHeader
        title="Checkout"
        subtitle="Complete your order securely."
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[2fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-neutral-800 bg-neutral-900 p-8"
          >
            <Input
              placeholder="Full Name"
              value={form.fullName}
              onChange={(e) =>
                setForm({ ...form, fullName: e.target.value })
              }
            />

            <Input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <Input
              placeholder="Delivery Address"
              value={form.address}
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
            />

            <Input
              placeholder="City"
              value={form.city}
              onChange={(e) =>
                setForm({ ...form, city: e.target.value })
              }
            />

            <textarea
              placeholder="Order Notes (Optional)"
              value={form.notes}
              onChange={(e) =>
                setForm({ ...form, notes: e.target.value })
              }
              rows={4}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none transition focus:border-amber-500"
            />

            <Button
              type="submit"
              size="lg"
              fullWidth
            >
              Place Order
            </Button>
          </form>

          <CartSummary
            subtotal={subtotal}
            tax={subtotal * 0.1}
            deliveryFee={8}
            onCheckout={() => {}}
          />
        </div>
      </section>
    </>
  );
};

export default Checkout;
