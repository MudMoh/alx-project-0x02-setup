import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>
                Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
            </p>
        </div>
    )
};

export default UserCard;