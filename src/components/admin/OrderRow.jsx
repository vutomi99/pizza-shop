import React from "react";
import { TableRow, TableCell, Select, MenuItem, Button, Chip } from "@mui/material";

export default function OrderRow({ order, index }) {
  return (
    <TableRow hover>
      <TableCell>{index}</TableCell>
      <TableCell>{order.customer}</TableCell>
      <TableCell>{order.date}</TableCell>
      <TableCell>
        <Chip label={order.status} color="warning" size="small" />
      </TableCell>
      <TableCell>
        <Select
          defaultValue="New"
          size="small"
          variant="outlined"
          style={{ marginRight: "8px" }}
        >
          <MenuItem value="New">New</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Ready">Ready</MenuItem>
        </Select>
        <Button variant="text" color="primary" size="small">
          View
        </Button>
      </TableCell>
    </TableRow>
  );
}