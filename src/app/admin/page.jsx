'use client';

import { Box } from '@mui/material';
import SideBar from '@/components/admin/SideBar';

const drawerWidth = 240;

const navbarHeight = 64;


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
          mt: `${navbarHeight}px`,
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

        
        </Box>
      </Box>
    </Box>
  );
}
