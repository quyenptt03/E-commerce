// SidebarItem.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const SidebarItem = ({ item, selectedItem, handleSelect ,title }) => {
  return (
    <>
     {title && <p className="title">{title}</p>}
    <Link className="linkClick" to={item.url} style={{ textDecoration: "none" }}>
      <li
        className={`sidebar-item ${selectedItem === item.id ? "selected" : ""}`}
        onClick={() => handleSelect(item.id)}
      >
        <item.icon className="icon" /> 
        <span>{item.label}</span>
      </li>
    </Link>
    </>
  );
};

export default SidebarItem;
