'use client';
import { Box } from '@mui/material';
import OrderTable from '@/components/admin/OrderTable';
import CreatePizzaForm from '@/components/admin/CreatePizzaForm';
import CreateToppingForm from '@/components/admin/CreateToppingForm';
import SideBar from '@/components/admin/SideBar';

const drawerWidth = 240;

export default function AdminDashboardPage() {
  return (
    <Box sx={{ display: 'flex' }}>
     
      <SideBar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'orange',
          color: 'white',
          p: 8,
          minHeight: '100vh',
          ml: `${drawerWidth}px`, 
        }}
      >
        <Box sx={{ maxWidth: '960px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              borderBottom: '2px solid #FFD700',
              paddingBottom: '0.5rem',
            }}
          >
            Admin Dashboard
          </h1>

          {/* Add your content components here */}
          {/* <OrderTable /> */}
          {/* <CreatePizzaForm /> */}
          {/* <CreateToppingForm /> */}
        </Box>
      </Box>
    </Box>
  );
}
