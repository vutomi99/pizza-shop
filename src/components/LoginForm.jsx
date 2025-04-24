"use client";
import * as Yup from "yup";

import {
  Avatar,
  Box,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
  Checkbox,
  Button,
  Grid,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import NextLink from "next/link";
import { useFormik } from "formik";
import { useEffect } from "react";

const LoginForm = ({ handleOnSubmit = () => {}, isLoading = false }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),

    onSubmit: (values) => {
      handleOnSubmit(values, formik);
    },
  });

  useEffect(() => {
    console.log("isLoading", isLoading);
    
  },[isLoading])

  return (
    <Box
      sx={{
        backgroundImage: "url('/image/pizza.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: 4,
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#fff",
            p: 4,
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              bgcolor: "#d84315",
              mb: 2,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Sign In
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate>
            <TextField
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              type="email"
              fullWidth
              margin="normal"
              variant="filled"
              InputProps={{
                style: { backgroundColor: "rgba(210, 228, 198, 0.38)" },
              }}
            />
            <TextField
              label="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              type="password"
              fullWidth
              margin="normal"
              variant="filled"
              InputProps={{
                style: { backgroundColor: "rgba(210, 228, 198, 0.38)" },
              }}
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
              sx={{ color: "#fff", mt: 1 }}
            />
            <Button
              type="submit"
              loading={isLoading}
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#d84315",
                ":hover": { backgroundColor: "#bf360c" },
              }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
              <Grid item>
                <Link
                  component={NextLink}
                  href="/forgot"
                  underline="hover"
                  sx={{ color: "#fff" }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  sx={{ color: "#fff" }}
                >
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginForm;
