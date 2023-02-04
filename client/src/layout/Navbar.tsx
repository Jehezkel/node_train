import * as React from "react";
import { NavLink } from "react-router-dom";
import NavbarLink from "./NavbarLink";

export interface INavbarProps {}

export default class Navbar extends React.Component<INavbarProps> {
  public render() {
    return (
      <div className="fixed left-0 top-0 z-20 flex h-screen w-fit flex-col bg-zinc-800 py-3">
        <nav className="w-20">
          <NavbarLink to="/" iconName="home" displayName="Home" />
          <NavbarLink to="/posts" iconName="list" displayName="Posts" />
        </nav>

        {/* darkmode container and maybe settings */}
        <div className="mt-auto">
          <a className="mx-1  flex h-16 cursor-pointer select-none flex-col items-center justify-center rounded-md text-sm transition-all hover:bg-zinc-700 hover:opacity-80 active:bg-sky-700 ">
            <span className="material-symbols-outlined">light_mode</span>
          </a>
        </div>
      </div>
    );
  }
}
