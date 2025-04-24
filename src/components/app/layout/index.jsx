"use client";

import Navbar from "@/components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const AppLayoutComponent = ({ children }) => {
  const client = new QueryClient({});
  return (
    <QueryClientProvider client={client}>
      <Navbar />
      {children}
    </QueryClientProvider>
  );
};

export default AppLayoutComponent;
