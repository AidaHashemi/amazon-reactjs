export default function DiscountedAmount(price, discount) {
  const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
  const numericDiscount = parseFloat(discount.replace(/[^0-9.-]+/g, ""));

  // Calculate discounted price
  const discountAmount = numericPrice - (numericDiscount / 100) * numericPrice;
  return discountAmount;
}
