import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses: Record<string, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-5 py-2 text-base",
  large: "px-7 py-3 text-lg",
};

const shapeClasses: Record<string, string> = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  title,
  shape = "rounded-md",
  size = "medium",
  styles = "",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`bg-blue-500 text-white font-semibold ${sizeClasses[size]} ${shapeClasses[shape]} ${className} ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;