"use client";

import { apiInstance } from "@/instances";
import { useMutation } from "@tanstack/react-query";

//Create Topping

const useCreateToppingHook = () => {
  const mutation = useMutation({
    mutationFn: async (toppingData = {}) => {
      console.log("Topping", toppingData);

      try {
        const res = await apiInstance({
          method: "POST",
          url: "/toppings",
          data: toppingData,
        });

        console.log("Response", res);

        return res?.data;
      } catch (error) {
        console.error("Error Creating Topping:", error);
        throw error;
      }
    },
  });

  return mutation;
};


//view Topping

const useGetToppingHook = () => {
  const query = useMutation({
    mutationFn: async () => {
      try {
        const res = await apiInstance({
          method: "GET",
          url: "/toppings",
        });

        console.log("Response", res);

        return res?.data;
      } catch (error) {
        console.error("Error Getting Topping:", error);
        throw error;
      }
    },
  });

  return query;
}

//Update Topping

const useUpdateToppingHook = () => {
  const mutation = useMutation({
    mutationFn: async (toppingData = {}) => {
      console.log("Topping", toppingData);

      try {
        const res = await apiInstance({
          method: "PUT",
          url: `/toppings/${toppingData.id}`,
          data: toppingData,
        });

        console.log("Response", res);

        return res?.data;
      } catch (error) {
        console.error("Error Updating Topping:", error);
        throw error;
      }
    },
  });

  return mutation;
}

export { useCreateToppingHook, useGetToppingHook, useUpdateToppingHook };