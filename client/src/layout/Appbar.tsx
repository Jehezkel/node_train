import * as React from 'react';

export interface IAppBarProps {
}

export default class AppBar extends React.Component<IAppBarProps> {
  public render() {
    return (
      <div className='bg-zinc-800 w-screen fixed top-0 left-0 h-16 z-10 flex items-center px-1'>
        AppBar
      </div>
    );
  }
}
