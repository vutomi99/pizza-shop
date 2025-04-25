"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/cart";
import { useCreateOrderHook } from "@/hooks/order";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function CartPage() {
  const { cartItems, removeFromCart, cartTotal, clearCart } = useCart();
  const { mutate: createOrder, isLoading } = useCreateOrderHook();
  const router = useRouter();

  const handleCheckout = () => {
    const orderPayload = {
      items: cartItems.map((item) => ({
        pizzaId: item.pizza.id,
        toppingIds: item.toppings.map((t) => t.id),
      })),
      totalPrice: cartTotal,
    };

    createOrder(orderPayload, {
      onSuccess: () => {
        clearCart();
        alert("Order placed!");
      },
      onError: (err) => {
        console.error(err);
        alert("Something went wrong.");
      },
    });
  };

  const handleContinueShopping = () => {
    router.push("/");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <Card>
          <CardContent>
            <List>
              {cartItems.map((item) => (
                <Box key={item.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={item.pizza.name}
                      secondary={
                        <>
                          Base: R {item.pizza.price.toFixed(2)}<br />
                          Toppings:{" "}
                          {item.toppings.length
                            ? item.toppings.map((t) => t.name).join(", ")
                            : "None"}<br />
                          Total: R {item.totalPrice.toFixed(2)}
                        </>
                      }
                    />
                    <Button onClick={() => removeFromCart(item.id)} color="error">
                      Remove
                    </Button>
                  </ListItem>
                  <Divider />
                </Box>
              ))}
            </List>

            <Typography variant="h5" sx={{ mt: 3 }}>
              Cart Total: R {cartTotal.toFixed(2)}
            </Typography>

            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={handleCheckout}
              disabled={isLoading}
              sx={{ mt: 2 }}
            >
              {isLoading ? "Placing Order..." : "Checkout"}
            </Button>

            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={() => router.push("/")}
              sx={{ mt: 2 }}
            >
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}
