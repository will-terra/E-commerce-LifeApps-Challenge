import CartItems from "@/components/organisms/CartItems";
import CartSummary from "@/components/organisms/CartSummary";

export default function Cart() {
  return (
    <main className="flex flex-col lg:flex-row justify-around my-8 bg-gray-100">
      <CartSummary device="mobile" />
      <CartItems />
      <CartSummary device="desktop" />
    </main>
  );
}
