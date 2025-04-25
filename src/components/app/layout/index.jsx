"use client";

import Navbar from "@/components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { CartProvider } from "@/hooks/cart";

const AppLayoutComponent = ({ children }) => {
  const client = new QueryClient({});

  return (
    <QueryClientProvider client={client}>
      <CartProvider>
        <Navbar />
        {children}
      </CartProvider>
    </QueryClientProvider>
  );
};

export default AppLayoutComponent;
