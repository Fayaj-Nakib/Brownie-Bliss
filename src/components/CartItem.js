import { Button } from "../components/ui/button";
import { useCart } from "../lib/cart";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <h3 className="font-bold">{item.name}</h3>
        <p>{item.price} per piece</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div className="flex space-x-2">
        <Button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          variant="outline"
        >
          -
        </Button>
        <Button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          variant="outline"
        >
          +
        </Button>
        <Button
          onClick={() => removeFromCart(item.id)}
          variant="destructive"
        >
          Remove
        </Button>
      </div>
    </div>
  );
}