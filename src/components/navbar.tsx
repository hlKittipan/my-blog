import React from "react";
import {Bars3Icon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from "@heroicons/react/24/outline";
import classNames from "classnames";
type Props = {
  /**
   * Allows the parent component to modify the state when the
   * menu button is clicked.
   */
  onMenuButtonClick(): void;
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
};
const Navbar = ({setCollapsed,
                  collapsed,
                  onMenuButtonClick}: Props) => {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <nav
      className={classNames({
        "bg-white text-zinc-500": true, // colors
        "flex items-center": true, // layout
        "w-screen w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true, //positioning & styling
      })}
    >
      <button
        className="grid place-content-center w-10 h-10 rounded-full opacity-0 md:opacity-100"
        onClick={() => setCollapsed(!collapsed)}
      >
        <Icon className="w-5 h-5" />
      </button>
      <div className="font-bold text-lg">Admin Panel</div>
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  );
};

export default Navbar;
