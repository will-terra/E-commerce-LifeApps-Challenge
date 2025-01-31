import CartItems from "@/components/organisms/CartItems";
import CartSummary from "@/components/molecules/CartSummary";

export default function Cart() {
  return (
    <main className="flex flex-col lg:flex-row justify-around my-8 bg-gray-100">
      <CartSummary className="flex flex-col self-center lg:hidden w-[90%] max-w-[40rem]  px-6 py-4" />
      <CartItems />
      <CartSummary className="hidden lg:flex lg:flex-col w-[80%] px-12 py-8 mt-4 mr-8" />
    </main>
  );
}
