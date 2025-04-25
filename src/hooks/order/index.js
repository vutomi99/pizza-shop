"use client";

import { apiInstance } from "@/instances";
import { useMutation } from "@tanstack/react-query";


export const useCreateOrderHook = () => {
  const mutation = useMutation({
    mutationFn: async (orderData = {}) => {
      console.log("Creating Order with Data:", orderData);

      const { userId, items, total, address } = orderData;

      if (!userId || !Array.isArray(items) || !items.length || !total || !address) {
        console.error("Validation Failed: Missing or invalid order fields:", {
          userId,
          items,
          total,
          address,
        });
        throw new Error("Invalid order data. Please provide all required fields.");
      }

      try {
        const res = await apiInstance.post("/orders", orderData);
        console.log("Create Order Response:", res);
        return res.data;
      } catch (error) {
        console.error("Error Creating Order:", error?.response?.data || error.message);
        throw error;
      }
    },
  });

  return mutation;
};


export const useViewOrderHook = () => {
  return useMutation({
    mutationFn: async (orderId) => {
      console.log("Fetching Order ID:", orderId);

      if (!orderId) {
        throw new Error("Order ID is required.");
      }

      try {
        const res = await apiInstance.get(`/orders/${orderId}`);
        console.log("View Order Response:", res);
        return res.data;
      } catch (error) {
        console.error("Error Viewing Order:", error?.response?.data || error.message);
        throw error;
      }
    },
  });
};
