import React from "react";
import { Button } from "@mui/material";

interface Props {
  label: string;
  color: "inherit" | "error" | "primary" | "secondary" | "info" | "success";
}

const CustomButton: React.FC<Props> = ({ label, color }) => {
  return (
    <Button variant="contained" color={color}>
      {label}
    </Button>
  );
};

export { CustomButton };
