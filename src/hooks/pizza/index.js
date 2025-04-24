
"use client";

import { apiInstance } from "@/instances";
import { useMutation } from "@tanstack/react-query";


//Create Pizza

const useCreatePizzaHook = () => {
  const mutation = useMutation({
    mutationFn: async (pizzaData = {}) => {
      console.log("Pizza", pizzaData);

      try {
        const res = await apiInstance({
          method: "POST",
          url: "/pizzas",
          data: pizzaData,
        });

        console.log("Response", res);

        return res?.data;
      } catch (error) {
        console.error("Error Creating Pizza:", error);
        throw error;
      }
    },
  });

  return mutation;
};

//Update Pizza

const useUpdatePizzaHook = () => {
  const mutation = useMutation({
    mutationFn: async (pizzaData = {}) => {
      console.log("Pizza", pizzaData);

      try {
        const res = await apiInstance({
          method: "PUT",
          url: `/api/pizzas/${pizzaData.id}`, 
          data: pizzaData,
        });
        

        console.log("Response", res);

        return res?.data;
      } catch (error) {
        console.error("Error Updating Pizza:", error);
        throw error;
      }
    },
  });

  return mutation;
}


//Delete 

const useDeletePizzaHook = () => {
  const mutation = useMutation({
    mutationFn: async (pizzaId) => {
      try {
        const res = await apiInstance({
          method: "DELETE",
           url: `/api/pizzas/${pizzaData.id}`
        });

        return res?.data;
      } catch (error) {
        console.error("Error Deleting Pizza:", error);
        throw error;
      }
    },
  });

  return mutation;
}



export { useCreatePizzaHook, useDeletePizzaHook, useUpdatePizzaHook };

