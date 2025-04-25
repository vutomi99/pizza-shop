"use client";

import { useState } from "react";
import { useCreateToppingHook } from "@/hooks/topping";
import { TextField, Button, Box, CircularProgress } from "@mui/material";

const CreateToppingForm = () => {
    const [form, setForm] = useState({ name: "", price: "" });
    const { mutateAsync: createTopping, isLoading: isPending } = useCreateToppingHook();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createTopping(form);
            alert("Topping created!");
            setForm({ name: "", price: "" });
        } catch (error) {
            console.error("Error creating topping", error);
            alert("Failed to create topping. Please try again.");
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
                name="price"
                label="Price"
                type="number"
                value={form.price}
                onChange={handleChange}
                required
                fullWidth
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isPending}
                startIcon={isPending && <CircularProgress size={20} />}
            >
                {isPending ? "Creating..." : "Create Topping"}
            </Button>
        </Box>
    );
};

export default CreateToppingForm;
