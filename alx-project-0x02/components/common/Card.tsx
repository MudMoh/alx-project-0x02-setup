import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px 0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  }}>
    <h3 style={{ marginBottom: "8px" }}>{title}</h3>
    <div>{content}</div>
  </div>
  );
};

export default Card;
