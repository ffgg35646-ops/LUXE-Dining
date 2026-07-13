export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function generateSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncateText(
  text: string,
  maxLength = 120
): string {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength)}...`;
}

export function calculateDiscount(
  price: number,
  discount: number
): number {
  return Number((price - (price * discount) / 100).toFixed(2));
}

export function calculateCartTotal(
  items: Array<{ quantity: number; item: { price: number } }>
): number {
  return Number(
    items
      .reduce(
        (total, current) =>
          total + current.item.price * current.quantity,
        0
      )
      .toFixed(2)
  );
}

export function getAverageRating(
  ratings: number[]
): number {
  if (ratings.length === 0) {
    return 0;
  }

  const total = ratings.reduce((sum, value) => sum + value, 0);

  return Number((total / ratings.length).toFixed(1));
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function classNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
