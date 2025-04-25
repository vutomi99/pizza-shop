"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
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

  const handleOrder = () => {
    alert(
      `Order placed: ${pizza.name} with ${selectedToppings
        .map((t) => t.name)
        .join(", ")}. Total: R ${totalPrice.toFixed(2)}`
    );
  };

  if (!pizza) return <Typography>Loading pizza details...</Typography>;
  if (toppingsLoading) return <Typography>Loading toppings...</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Card sx={{ maxWidth: 600, mx: "auto" }}>
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
          >
            Add to cart
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => alert("Redirecting to cart...")}
          >
            Go to Cart
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
