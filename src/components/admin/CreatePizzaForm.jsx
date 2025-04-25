"use client";

import { useState } from "react";
import { useCreatePizzaHook } from "@/hooks/pizza";
import { TextField, Button, Box } from "@mui/material";

const CreatePizzaForm = () => {
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const { mutateAsync: createPizza, isLoading: isPending } = useCreatePizzaHook();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPizza(form);
      alert("Pizza created!");
      setForm({ name: "", description: "", price: "" });
    } catch (error) {
      console.error("Error creating pizza", error);
      alert("Failed to create pizza. Please try again.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, margin: "auto" }}
    >
      <TextField
        name="name"
        label="Name"
        value={form.name}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        name="description"
        label="Description"
        value={form.description}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        name="price"
        label="Price"
        type="number"
        value={form.price}
        onChange={handleChange}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" disabled={isPending}>
        {isPending ? "Creating..." : "Create Pizza"}
      </Button>
    </Box>
  );
};

export default CreatePizzaForm;
