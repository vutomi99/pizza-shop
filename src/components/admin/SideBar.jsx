'use client';
import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BarChartIcon from '@mui/icons-material/BarChart';

import CreatePizzaForm from '@/components/admin/CreatePizzaForm';
import CreateToppingForm from '@/components/admin/CreateToppingForm';
import StatsGraphs from '@/components/admin/StatsGraphs';

const drawerWidth = 240;

const SideBar = () => {
  const [activeComponent, setActiveComponent] = useState(null); // Start empty

  const renderContent = () => {
    switch (activeComponent) {
      case 'createPizza':
        return <CreatePizzaForm />;
      case 'createTopping':
        return <CreateToppingForm />;
      case 'graphStats':
        return <StatsGraphs />;
      case 'stats':
        return <div style={{ color: '#fff' }}>📊 Stats Overview</div>;
      default:
        return <div style={{ color: '#999' }}>Please select an option from the sidebar.</div>;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: '64px',
            height: 'calc(100vh - 64px)',
          },
        }}
      >
        <List>
          
          <ListItemButton onClick={() => setActiveComponent('createPizza')}>
            <ListItemIcon><LocalPizzaIcon /></ListItemIcon>
            <ListItemText primary="Create Pizza" />
          </ListItemButton>

          <ListItemButton onClick={() => setActiveComponent('createTopping')}>
            <ListItemIcon><AddCircleIcon /></ListItemIcon>
            <ListItemText primary="Create Topping" />
          </ListItemButton>

          <ListItemButton onClick={() => setActiveComponent('graphStats')}>
            <ListItemIcon><BarChartIcon /></ListItemIcon>
            <ListItemText primary="Graph Stats" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Drawer>

      <main style={{ marginLeft: drawerWidth, padding: '20px', flex: 1 }}>
        {renderContent()}
      </main>
    </div>
  );
};

export default SideBar;
