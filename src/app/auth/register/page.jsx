"use client";

import RegisterForm from "@/components/RegisterForm";
import useRegisterHook from "@/hooks/auth/register";
import { useEffect } from "react";

const RegisterPage = () => {
  const { mutateAsync: registerAttempt, isPending: loadingInProgress } =
    useRegisterHook();

  useEffect(() => {
    console.log("loadingInProgress", loadingInProgress);
  }, [loadingInProgress]);

  const handleOnSubmit = async (values, formik) => {
    console.log("Form values:", values);
    await registerAttempt(values);
  };
  return (
    <RegisterForm
      handleOnSubmit={handleOnSubmit}
      isLoading={loadingInProgress}
    />
  );
};

export default RegisterPage;
