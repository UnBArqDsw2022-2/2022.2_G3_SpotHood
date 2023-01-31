import React from "react";
import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Props {
  label: string;
  type: string;
  value: any;
  size?: string;

  setText: Dispatch<SetStateAction<any>>;
}

const Input: React.FC<Props> = ({ label, type, value, size="100%", setText }) => {

  return (
    <div
      style={{
        width: `${size}`,
      }}
    >
      <TextField
        size="small"
        id={label}
        label={label}
        variant="outlined"
        fullWidth
        type={type}
        value={value}
        onChange={(e) => {setText(e.target.value)}}
      />
    </div>
  );
};

export { Input };
