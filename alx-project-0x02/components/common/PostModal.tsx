import React, { useState } from "react";
import { type PostModalProps } from '@/interfaces';


const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "8px",
        minWidth: "300px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
      }}>
        <h2>Add Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label><br />
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              style={{ width: "100%", marginBottom: "8px" }}
            />
          </div>
          <div>
            <label>Content:</label><br />
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              required
              style={{ width: "100%", marginBottom: "8px" }}
            />
          </div>
          <button type="submit" style={{ marginRight: "8px" }}>Add</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;