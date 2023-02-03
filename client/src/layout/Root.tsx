import * as React from 'react';
import { Outlet } from 'react-router';
import AppBar from './Appbar';
import Navbar from './Navbar';

export interface IRootProps {
}

export default class Root extends React.Component<IRootProps> {
  public render() {
    return (
        <div className="">
        {/* w-20 */}
        <div className="max-lg:hidden">
  
          <Navbar></Navbar>
        </div>
        <div className="hidden max-lg:block">
          <AppBar></AppBar>
        </div>
        <div className="w-screen h-screen pl-22 py-2  max-lg:pt-18">
          <Outlet/>
        </div>
      </div>
    );
  }
}
