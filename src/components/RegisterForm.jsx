"use client";

import {
  Avatar,
  Box,
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Grid,
  Link,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NextLink from "next/link";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register submitted");
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('/image/pizza.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        px: 2,
        pt: 10, // margin from top
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
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              {[
                { label: "Name", type: "text", name: "name" },
                { label: "Surname", type: "text", name: "surname" },
                { label: "Phone", type: "tel", name: "phone" },
                { label: "Email", type: "email", name: "email" },
                { label: "Address", type: "text", name: "address" },
                { label: "Password", type: "password", name: "password" },
              ].map((field, index) => (
                <Grid item xs={12} key={index}>
                  <TextField
                    label={field.label}
                    type={field.type}
                    name={field.name}
                    required
                    fullWidth
                    variant="filled"
                    InputProps={{
                      style: { backgroundColor: "rgba(255,255,255,0.9)" },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#d84315",
                ":hover": { backgroundColor: "#bf360c" },
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
              <Grid item>
                <Link
                  component={NextLink}
                  href="/auth/login"
                  underline="hover"
                  sx={{ color: "#fff" }}
                >
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterForm;
