'use client';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function OrderForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed! We’ll contact you for confirmation. (Pre-order: 1-3 days delivery)");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="text" placeholder="Name" required />
      <Input type="email" placeholder="Email" required />
      <Input type="text" placeholder="Delivery Address" required />
      <Input type="text" placeholder="Special Notes" />
      <Button type="submit" className="w-full bg-choco-brown">
        Submit Order
      </Button>
    </form>
  );
}