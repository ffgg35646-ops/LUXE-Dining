import { Link } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";

const OrderSuccess = () => {
  return (
    <>
      <PageHeader
        title="Order Confirmed"
        subtitle="Thank you for choosing LUXE Dining."
      />

      <section className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-2xl px-6">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-12 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-500/20 text-5xl text-amber-400">
              ✓
            </div>

            <h2 className="mt-8 text-4xl font-bold text-white">
              Your Order Has Been Placed!
            </h2>

            <p className="mt-6 leading-8 text-neutral-400">
              We have successfully received your order.
              A confirmation email will be sent shortly with your
              order details and estimated delivery time.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link to="/menu">
                <Button variant="outline">
                  Continue Shopping
                </Button>
              </Link>

              <Link to="/">
                <Button>
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderSuccess;
