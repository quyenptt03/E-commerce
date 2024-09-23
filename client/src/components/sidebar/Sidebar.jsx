
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { menuUser,menuAdmin } from "./data"
import SidebarItem from "./SidebarItem"; 
import "./sidebar.scss"; 

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (id) => {
    setSelectedItem(id);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          {menuAdmin.map((section) => (
            <React.Fragment key={section.id}>
              {section.title && <p className="title">{section.title}</p>}
              {section.items.map((item) => (
                <SidebarItem
                  key={item.id}
                  item={item}
                  selectedItem={selectedItem}
                  handleSelect={handleSelect}
                />
              ))}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
