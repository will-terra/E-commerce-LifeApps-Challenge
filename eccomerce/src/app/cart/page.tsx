"use client";
import CartItems from "@/components/organisms/CartItems";
import CartSummary from "@/components/molecules/CartSummary";

export default function Cart() {
  return (
    <main className="flex flex-col md:flex-row justify-around items-center py-8 bg-gray-100">
      <CartSummary className="flex flex-col lg:hidden w-[90%] px-6 py-4" />
      <CartItems />
      <CartSummary className="hidden lg:flex lg:flex-col w-[80%] px-12 py-8" />
    </main>
  );
}
