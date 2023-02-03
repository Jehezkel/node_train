import * as React from "react";
import { NavLink } from "react-router-dom";
import NavbarLink from "./NavbarLink";

export interface INavbarProps {}

export default class Navbar extends React.Component<INavbarProps> {
  public render() {
    return (
      <div className="h-screen fixed left-0 top-0 bg-zinc-800 w-fit py-3 flex flex-col z-20">
        <nav className="w-20">
          <NavbarLink to="/" iconName="home" displayName="Home"/>
          <NavbarLink to="/posts" iconName="list" displayName="Posts"/>
        </nav>

        {/* darkmode container and maybe settings */}
        <div className="mt-auto">
          <a className="flex  mx-1 h-16 text-sm select-none justify-center cursor-pointer items-center flex-col active:bg-sky-700 hover:bg-zinc-700 hover:opacity-80 rounded-md transition-all ">
            <span className="material-symbols-outlined">light_mode</span>
          </a>
        </div>
      </div>
    );
  }
}
