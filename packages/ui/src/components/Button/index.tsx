import React from "react";
import { ButtonProps } from "./type";

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      style={{
        padding: "8px 16px",
        backgroundColor: "#0070f3",
        color: "#fff",
        border: "none",
        borderRadius: 4,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
