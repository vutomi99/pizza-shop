"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useCart } from "@/hooks/cart";
import { useRouter } from "next/navigation";


import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { useGetToppingHook } from "@/hooks/topping";

export default function ProductDetails() {
  const params = useParams();
  const { id } = params;
  const [pizza, setPizza] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { mutate: fetchToppings, data: toppings, isLoading: toppingsLoading } = useGetToppingHook();

  useEffect(() => {
    if (id) {
      axios.get(`/api/pizzas/${id}`).then((res) => {
        setPizza(res.data);
        setTotalPrice(res.data.price);
      });
    }

    // Fetch toppings from the database
    fetchToppings();
  }, [id, fetchToppings]);

  const handleToppingChange = (topping, isChecked) => {
    if (isChecked) {
      setSelectedToppings((prev) => [...prev, topping]);
      setTotalPrice((prev) => prev + topping.price);
    } else {
      setSelectedToppings((prev) =>
        prev.filter((item) => item.id !== topping.id)
      );
      setTotalPrice((prev) => prev - topping.price);
    }
  };

const { addToCart } = useCart();
const router = useRouter();

const handleOrder = () => {
  addToCart(pizza, selectedToppings, totalPrice);
  router.push("/cart");
};

  if (!pizza) return <Typography>Loading pizza details...</Typography>;
  if (toppingsLoading) return <Typography>Loading toppings...</Typography>;

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blurry background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/image/pizza.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          zIndex: 0,
        }}
      />
      {/* Form container */}
      <Card
        sx={{
          maxWidth: 600,
          mx: "auto",
          position: "relative",
          zIndex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Slight transparency for better readability
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={pizza.image || "/image/pizza.jpe"}
          alt={`Image of ${pizza.name}`}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {pizza.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {pizza.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Base Price: R {pizza.price.toFixed(2)}
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6">Select Toppings:</Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {toppings?.map((topping) => (
                <Grid item xs={12} sm={6} key={topping.id || topping.name}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) =>
                          handleToppingChange(topping, e.target.checked)
                        }
                      />
                    }
                    label={`${topping.name} (+R ${topping.price.toFixed(2)})`}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Typography variant="h5" sx={{ mt: 3 }}>
            Total: R {totalPrice.toFixed(2)}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handleOrder}
            startIcon={<ShoppingCartIcon />}
          >
            Add to cart
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => router.push("/cart")}
            endIcon={<ArrowForwardIcon />}
          >
            Go to Cart
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
