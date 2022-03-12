import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
      {/* interesting part of code */}
      {/* if selected variable is equal to true, it will change the name of variable from sidebarOption to sidebarOption--active */}
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
