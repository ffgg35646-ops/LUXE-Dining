import Button from "@/components/ui/Button";

interface CartSummaryProps {
  subtotal: number;
  deliveryFee?: number;
  tax?: number;
  onCheckout: () => void;
}

const CartSummary = ({
  subtotal,
  deliveryFee = 5,
  tax = 0,
  onCheckout,
}: CartSummaryProps) => {
  const total = subtotal + deliveryFee + tax;

  return (
    <aside className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-neutral-300">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-neutral-300">
          <span>Delivery</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-neutral-300">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-neutral-700 pt-4">
          <div className="flex items-center justify-between text-xl font-bold text-white">
            <span>Total</span>
            <span className="text-amber-400">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <Button
        fullWidth
        size="lg"
        className="mt-8"
        onClick={onCheckout}
      >
        Proceed to Checkout
      </Button>
    </aside>
  );
};

export default CartSummary;
