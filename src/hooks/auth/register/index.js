"use client";

import { apiInstance } from "@/instances";
import { useMutation } from "@tanstack/react-query";

const useRegisterHook = () => {
  const mutation = useMutation({
    mutationFn: async (user = {}) => {
      console.log("User", user);

      try {
        const res = await apiInstance({
          method: "POST",
          url: "/auth/register",
          data: user,
        });

        console.log("Response", res);

        return res?.data;
      } catch (error) {
        console.error("Error during register:", error);
        throw error;
      }
    },
  });

  return mutation;
};

export default useRegisterHook;
