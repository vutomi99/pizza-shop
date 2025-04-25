"use client";

import RegisterForm from "@/components/RegisterForm";
import useRegisterHook from "@/hooks/auth/register";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Snackbar, Alert } from "@mui/material";

const RegisterPage = () => {
  const { mutateAsync: registerAttempt, isPending: loadingInProgress } =
    useRegisterHook();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const router = useRouter();

  useEffect(() => {
    console.log("loadingInProgress", loadingInProgress);
  }, [loadingInProgress]);

  const handleOnSubmit = async (values, formik) => {
    try {
      const res = await registerAttempt(values);
      setSnackbarMessage("Registration successful!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      
      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
    } catch (error) {
      setSnackbarMessage("Registration failed. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <RegisterForm
        handleOnSubmit={handleOnSubmit}
        isLoading={loadingInProgress}
      />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default RegisterPage;
