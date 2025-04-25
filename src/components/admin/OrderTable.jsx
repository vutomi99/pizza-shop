// components/admin/OrderTable.jsx
import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
} from "@mui/material";
import OrderRow from "./OrderRow";

export default function OrderTable() {
  const placeholderOrders = [
    { id: "1", customer: "Customer A", date: "2025-04-21", status: "New" },
    { id: "2", customer: "Customer B", date: "2025-04-22", status: "In Progress" },
    { id: "3", customer: "Customer C", date: "2025-04-23", status: "Ready" },
  ];

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {placeholderOrders.map((order, index) => (
            <OrderRow key={order.id} order={order} index={index + 1} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
