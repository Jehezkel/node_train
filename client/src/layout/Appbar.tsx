import * as React from "react";

export interface IAppBarProps {}

export default class AppBar extends React.Component<IAppBarProps> {
  public render() {
    return (
      <div className="fixed top-0 left-0 z-10 flex h-16 w-screen items-center bg-zinc-800 px-1">
        AppBar
      </div>
    );
  }
}
