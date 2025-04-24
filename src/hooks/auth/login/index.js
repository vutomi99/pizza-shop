"use client";

import { apiInstance } from "@/instances";
import { useMutation } from "@tanstack/react-query";

const useLoginHook = () => {
  const mutation = useMutation({
    mutationFn: async (credentials = {}) => {
      console.log("Credentials", credentials);

      try {
        const res = await apiInstance({
          method: "POST",
          url: "/auth/login",
          data: credentials,
        });

        console.log("Response", res);

        return res?.data;
      } catch (error) {
        console.error("Error during login:", error);
        throw error;
      }
    },
  });

  return mutation;
};

export default useLoginHook;
