"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/cart";
import { useCreateOrderHook } from "../../hooks/order";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("token");
};

export default function CartPage() {
  const router = useRouter();
  const {
    cartItems,
    removeFromCart,
    cartTotal,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const { mutate: createOrder, isLoading } = useCreateOrderHook();
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const handleCheckout = () => {
    if (!isAuthenticated()) {
      setShowLoginDialog(true);
      return;
    }

    const orderPayload = {
      items: cartItems.map((item) => ({
        pizzaId: item.pizza.id,
        toppingIds: item.toppings.map((t) => t.id),
        quantity: item.quantity,
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

  const handleLoginRedirect = () => {
    setShowLoginDialog(false);
    router.push("/auth/login");
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
                      primary={
                        <>
                          <Typography fontWeight="bold">{item.pizza.name}</Typography>
                          <Box display="flex" alignItems="center" gap={1} mt={1}>
                            <Button
                              variant="outlined"
                              size="small"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              –
                            </Button>
                            <Typography>{item.quantity}</Typography>
                            <Button
                              variant="outlined"
                              size="small"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              +
                            </Button>
                          </Box>
                        </>
                      }
                      secondary={
                        <>
                          Base: R {item.pizza?.price?.toFixed(2) || "0.00"}
                          <br />
                          Toppings:{" "}
                          {item.toppings?.length
                            ? item.toppings.map((t) => t.name).join(", ")
                            : "None"}
                          <br />
                          Item Total: R {item.totalPrice?.toFixed(2) || "0.00"}
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
              onClick={handleContinueShopping}
              sx={{ mt: 2 }}
            >
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      )}

      <Dialog open={showLoginDialog} onClose={() => setShowLoginDialog(false)}>
        <DialogTitle>Login Required</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You need to be logged in to place an order. Please log in to continue.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowLoginDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleLoginRedirect} color="primary" variant="contained">
            Go to Login
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
