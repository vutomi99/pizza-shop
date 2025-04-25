'use client';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Avatar,
} from '@mui/material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { useCreatePizzaHook } from '@/hooks/pizza';

const CreatePizzaForm = () => {
  const { mutateAsync: createPizza, isLoading: isPending } = useCreatePizzaHook();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      description: Yup.string().required('Description is required'),
      price: Yup.number()
        .typeError('Price must be a number')
        .required('Price is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await createPizza(values);
        alert('Pizza created!');
        resetForm();
      } catch (error) {
        console.error('Error creating pizza', error);
        alert('Failed to create pizza. Please try again.');
      }
    },
  });

  return (
    <Box
      sx={{
        backgroundImage: "url('/image/pizza.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 4,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
            p: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          <Avatar
            sx={{
              mx: 'auto',
              bgcolor: '#d84315',
              mb: 2,
            }}
          >
            <LocalPizzaIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Create Pizza
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate>
            <TextField
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={!!formik.errors.name && formik.touched.name}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
              margin="normal"
              variant="filled"
              InputProps={{
                style: { backgroundColor: 'rgba(210, 228, 198, 0.38)' },
              }}
            />

            <TextField
              label="Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={!!formik.errors.description && formik.touched.description}
              helperText={formik.touched.description && formik.errors.description}
              fullWidth
              margin="normal"
              multiline
              rows={3}
              variant="filled"
              InputProps={{
                style: { backgroundColor: 'rgba(210, 228, 198, 0.38)' },
              }}
            />

            <TextField
              label="Price"
              name="price"
              type="number"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={!!formik.errors.price && formik.touched.price}
              helperText={formik.touched.price && formik.errors.price}
              fullWidth
              margin="normal"
              variant="filled"
              InputProps={{
                style: { backgroundColor: 'rgba(210, 228, 198, 0.38)' },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isPending}
              sx={{
                mt: 2,
                backgroundColor: '#d84315',
                ':hover': { backgroundColor: '#bf360c' },
              }}
            >
              {isPending ? 'Creating...' : 'Create Pizza'}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CreatePizzaForm;
