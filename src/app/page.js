import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";
import OrderForm from "../components/OrderForm";

const products = [
  {
    id: 1,
    name: "Dark Chocolate Fudge Brownie",
    description: "A perfect blend of fudginess and crispness.",
    price: "130TK",
    image: "/images/dark-chocolate-fudge-brownie.jpg",
    minOrder: 4,
  },
  {
    id: 2,
    name: "Dark Chocolate Chunk Cookie",
    description: "Soft, chewy cookies with rich chocolate chunks.",
    price: "150TK",
    image: "/images/dark-chocolate-chunk-cookie.jpg",
    minOrder: 4,
  },
  {
    id: 3,
    name: "Gulab Jamun",
    description: "Sweet, syrupy balls dusted with powdered sugar.",
    price: "50TK",
    image: "/images/gulab-jamun.jpg",
    minOrder: 10,
  },
];

const reviews = [
  { id: 1, name: "Step Spmar", review: "Best brownies ever.", rating: 5 },
  { id: 2, name: "Steve Bedder", review: "A setavne yowah!", rating: 5 },
  { id: 3, name: "John Luca", review: "A setavne yowah!", rating: 5 },
  { id: 4, name: "John Stewart", review: "A setavne yowah!", rating: 5 },
];

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <div className="relative">
        <Image
          src="/images/cover.jpg"
          alt="Brownie Bliss Banner"
          width={1200}
          height={400}
          className="w-full h-96 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <div className="text-center text-cream">
            <h1 className="text-4xl font-bold mb-2">Brownie Bliss</h1>
            <p className="text-lg">Irresistibly distracting</p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Utrit a uto de
              ISUital elementum, oum alla quair.
            </p>
            <div className="flex space-x-4">
              <Link href="/products">
                <Button className="bg-choco-brown">Shop Now</Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="border-choco-brown text-choco-brown">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Our Menu */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Customer Reviews and Order Form */}
      <div className="container mx-auto py-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Order Now</h2>
          <OrderForm />
        </div>
      </div>
    </div>
  );
}