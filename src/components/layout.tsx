'use client'
import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const Layout = (props: PropsWithChildren) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div
      className={classNames({
        "grid bg-zinc-100 min-h-screen": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      <Sidebar
        collapsed={collapsed}
        shown={showSidebar}
      />
      <div className="">
        <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} collapsed={collapsed}
                setCollapsed={setSidebarCollapsed}/>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
