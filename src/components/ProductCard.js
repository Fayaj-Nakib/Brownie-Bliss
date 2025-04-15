'use client';
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { useCart } from "../lib/cart";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Card className="w-full max-w-xs mx-auto">
      <CardHeader>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-32 object-cover rounded-md"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <p className="text-sm text-gray-600">Pre-order only (1-3 days delivery)</p>
        <p className="font-bold mt-1">{product.price}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => addToCart(product)} className="w-full bg-choco-brown">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}