"use client";

import useLoginHook from "@/hooks/auth/login";
import LoginForm from "../../../components/LoginForm";
import { useEffect } from "react";

const LoginPage = () => {
  const { mutateAsync: loginAttempt, isPending: loadingInProgress } =
    useLoginHook();

  useEffect(() => {
    console.log("loadingInProgress", loadingInProgress);
  }, [loadingInProgress]);

  const handleOnSubmit = async (values, formik) => {
    console.log("Form values:", values);
    await loginAttempt(values);
    // Handle form submission logic here
  };
  return (
    <LoginForm handleOnSubmit={handleOnSubmit} isLoading={loadingInProgress} />
  );
};

export default LoginPage;
