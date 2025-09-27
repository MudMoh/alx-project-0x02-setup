import React from "react";
import { type ButtonProps } from "@/interfaces";
import { type ButtonSize } from "@/interfaces";
import { type ButtonShape } from "@/interfaces";


const sizeClasses: Record<ButtonSize, string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
  "rounded-lg": "rounded-lg",
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
  styles = "",
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