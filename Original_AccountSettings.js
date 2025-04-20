import React, { useState } from "react";

export default function AccountSettings() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Jane Doe");
  const [email, setEmail] = useState("jane@company.com");

  const label = {
    fontSize: "0.85rem",
    color: "#cbd5e0",
    display: "block",
    marginBottom: "0.3rem",
  };

  const input = {
    width: "100%",
    padding: "0.6rem",
    borderRadius: "8px",
    backgroundColor: "#1a202c",
    border: "1px solid #4a5568",
    color: "#fff",
    marginBottom: "1rem",
  };

  const toggleButton = {
    fontSize: "0.9rem",
    color: "#63b3ed",
    cursor: "pointer",
    float: "right",
    marginBottom: "1rem",
  };

  return (
    <div style={{ padding: "2rem 0", maxWidth: "850px" }}>
      <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ color: "#38d881" }}>Personal Details</h3>
        <span style={toggleButton} onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancel" : "Edit"}
        </span>
      </div>

      <label style={label}>Full Name</label>
      <input style={input} value={name} onChange={(e) => setName(e.target.value)} disabled={!isEditing} />

      <label style={label}>Email Address</label>
      <input style={input} value={email} onChange={(e) => setEmail(e.target.value)} disabled={!isEditing} />

      <label style={label}>Phone Number</label>
      <input style={input} placeholder="e.g. +44 7911 123456" disabled />
    </div>
  );
}
