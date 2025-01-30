import CartItems from "@/components/organisms/CartItems";
import CartSummary from "@/components/molecules/CartSummary";

export default function Cart() {
  return (
    <main className="flex flex-col md:flex-row justify-around items-center py-8 bg-gray-100">
      <CartItems />
      <CartSummary />
    </main>
  );
}
