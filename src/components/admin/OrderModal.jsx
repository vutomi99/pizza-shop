import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

export default function OrderModal({ order, onClose }) {
  return (
    <Dialog open={!!order} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Order #{order.id}</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          <strong>Customer:</strong> {order.customer}
        </Typography>
        <Typography variant="body1">
          <strong>Items:</strong> {order.items.join(', ')}
        </Typography>
        <Typography variant="body1">
          <strong>Status:</strong> {order.status}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}