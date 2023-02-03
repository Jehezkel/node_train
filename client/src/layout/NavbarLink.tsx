import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface INavbarLinkProps {
    to:string,
    // children: React.ReactNode,
    iconName:string,
    displayName:string

}

export default class NavbarLink extends React.Component<INavbarLinkProps> {
  public render() {
    return (
      <NavLink
        className={(navData) => (navData.isActive ? "bg-sky-700" : "hover:bg-zinc-700 hover:opacity-80")+" flex mx-1 mt-1 h-16 text-sm select-none justify-center cursor-pointer items-center flex-col rounded-md transition-all " }
        to={this.props.to}>
          <span className="material-symbols-outlined">{this.props.iconName}</span>
            <div className='mt-1'>{this.props.displayName}</div>
        {/* {this.props.children} */}
      </NavLink>
    );
  }
}
