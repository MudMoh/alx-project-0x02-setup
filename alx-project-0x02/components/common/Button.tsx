import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeStyles = {
  small: { padding: "4px 12px", fontSize: "0.85rem" },
  medium: { padding: "8px 20px", fontSize: "1rem" },
  large: { padding: "12px 28px", fontSize: "1.15rem" },
};

const shapeStyles = {
  "rounded-sm": { borderRadius: "4px" },
  "rounded-md": { borderRadius: "12px" },
  "rounded-full": { borderRadius: "999px" },
};

const Button: React.FC<ButtonProps> = ({
    size = "medium",
    shape = "rounded-md",
    children,
    onClick,
    type = "button",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            style={{
                background: "#007bff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                ...sizeStyles[size],
                ...shapeStyles[shape],
                margin: "8px",
                transition: "background 0.2s",
            }}>
            {children}
        </button>
    )
};

export default Button;