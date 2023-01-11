import React from "react";
import { Button } from "@mui/material";

interface Props {
  label: string;
  color: "inherit" | "error" | "primary" | "secondary" | "info" | "success";
  onClick: () => void;
}

const CustomButton: React.FC<Props> = ({ label, color, onClick }) => {
  return (
    <Button
      variant="contained"
      color={color}
      onClick={onClick}  
    >
      {label}
    </Button>
  );
};

export { CustomButton };
