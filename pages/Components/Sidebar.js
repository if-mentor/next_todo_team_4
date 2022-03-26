import React from "react";
import SidebarData from "./SidebarData";

export const Sidebar = () => {
  return (
    <>
      <ul>
        {SidebarData.map((item, index) => {
          return (
            <li key={index}>
              {item.title}
              <span>{item.total}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
