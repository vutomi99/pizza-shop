"use client";

import { apiInstance } from "@/instances";
import { useQuery, useMutation } from "@tanstack/react-query";

// Get all pizzas
const useGetPizzasHook = () => {
  return useQuery({
    queryKey: ["pizzas"],
    queryFn: async () => {
      const res = await apiInstance({
        method: "GET",
        url: "/pizzas", 
      });
      return res?.data;
    },
  });
};

//  Create Pizza
const useCreatePizzaHook = () => {
  return useMutation({
    mutationFn: async (pizzaData = {}) => {
      const res = await apiInstance({
        method: "POST",
        url: "/pizzas", 
        data: pizzaData,
      });
      return res?.data;
    },
  });
};

// Update Pizza
const useUpdatePizzaHook = () => {
  return useMutation({
    mutationFn: async (pizzaData = {}) => {
      const res = await apiInstance({
        method: "PUT",
        url: `/api/pizzas/${pizzaData.id}`,
        data: pizzaData,
      });
      return res?.data;
    },
  });
};

// Delete Pizza
const useDeletePizzaHook = () => {
  return useMutation({
    mutationFn: async (pizzaId) => {
      const res = await apiInstance({
        method: "DELETE",
        url: `/pizzas/${pizzaId}`, 
      });
      return res?.data;
    },
  });
};

export {
  useGetPizzasHook,
  useCreatePizzaHook,
  useUpdatePizzaHook,
  useDeletePizzaHook,
};
