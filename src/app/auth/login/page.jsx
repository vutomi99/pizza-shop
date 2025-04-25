"use client";

import useLoginHook from "@/hooks/auth/login";
import LoginForm from "../../../components/LoginForm";
import { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const { mutateAsync: loginAttempt, isPending: loadingInProgress } = useLoginHook();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOnSubmit = async (values, formik) => {
    try {
      await loginAttempt(values);
      setSnackbarOpen(true);


      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Login failed:", error);
      formik.setFieldError("email", "Invalid credentials"); 
    }
  };

  return (
    <>
      <LoginForm handleOnSubmit={handleOnSubmit} isLoading={loadingInProgress} />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%" }}>
          Successfully logged in!
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginPage;
