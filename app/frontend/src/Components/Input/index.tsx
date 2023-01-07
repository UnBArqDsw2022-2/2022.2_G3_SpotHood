import React from "react";
import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Props {
  label: string;
  type: string;
  value: string;

  setText: Dispatch<SetStateAction<any>>;
}

const Input: React.FC<Props> = ({ label, type, value, setText }) => {

  return (
    <div
      style={{
        width: "100%",
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
