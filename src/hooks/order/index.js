"use client";

import { apiInstance } from "@/instances";
import { useMutation } from "@tanstack/react-query";

//Create Order
const useCreateOrderHook = () => {
  const mutation = useMutation({
    mutationFn: async (orderData = {}) => {
      console.log("Order", orderData);

      try {
        const res = await apiInstance({
          method: "POST",
          url: "/orders",
          data: orderData,
        });

        console.log("Response", res);

        return res?.data;
      } catch (error) {
        console.error("Error Creating Order:", error);
        throw error;
      }
    },
  });

  return mutation;
};

//view Order
const useViewOrderHook = () => {
    const mutation = useMutation({
        mutationFn: async (orderId) => {
            console.log("Order ID", orderId);

            try {
                const res = await apiInstance({
                    method: "GET",
                    url: `/orders/${orderId}`,
                });

                console.log("Response", res);

                return res?.data;
            } catch (error) {
                console.error("Error Viewing Order:", error);
                throw error;
            }
        },
    });

    return mutation;
};

export  {useCreateOrderHook, useViewOrderHook};    