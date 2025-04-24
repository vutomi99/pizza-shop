"use client";

import { useState } from "react";
import useCreatePizzaHook from "@/hooks/pizza";

const CreatePizzaForm = () => {
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const { mutateAsync: createPizza, isPending } = useCreatePizzaHook();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPizza(form);
      alert("Pizza created!");
    } catch (error) {
      console.error("Error creating pizza", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
      <input name="price" placeholder="Price" type="number" value={form.price} onChange={handleChange} required />
      <button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create Pizza"}
      </button>
    </form>
  );
};

export default CreatePizzaForm;
