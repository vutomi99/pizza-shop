import React from "react";
import Chip from "@mui/material/Chip";

export default function StatusBadge({ status }) {
  const colors = {
    "New": "warning",
    "In Progress": "info",
    "Ready": "success"
  };

  return (
    <Chip
      label={status}
      color={colors[status]}
      size="small"
      variant="filled"
    />
  );
}