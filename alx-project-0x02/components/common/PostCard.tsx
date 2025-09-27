import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}>
            <h3>{title}</h3>
            <p>{content}</p>
            <small>User ID: {userId}</small>
        </div>
    )
};

export default PostCard;