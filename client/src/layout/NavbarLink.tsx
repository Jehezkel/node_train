import * as React from "react";
import { NavLink } from "react-router-dom";

export interface INavbarLinkProps {
  to: string;
  // children: React.ReactNode,
  iconName: string;
  displayName: string;
}

export default class NavbarLink extends React.Component<INavbarLinkProps> {
  public render() {
    return (
      <NavLink
        className={(navData) =>
          (navData.isActive
            ? "bg-sky-700"
            : "hover:bg-zinc-700 hover:opacity-80") +
          " mx-1 mt-1 flex h-16 cursor-pointer select-none flex-col items-center justify-center rounded-md text-sm transition-all "
        }
        to={this.props.to}
      >
        <span className="material-symbols-outlined">{this.props.iconName}</span>
        <div className="mt-1">{this.props.displayName}</div>
        {/* {this.props.children} */}
      </NavLink>
    );
  }
}
