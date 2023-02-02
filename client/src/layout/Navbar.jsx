import React from "react";
export default class Navbar extends React.Component {
  render() {
    return (
      <div className="h-screen absolute left-0 top-0 bg-neutral-800 w-fit py-3 flex flex-col">
        <nav>
          <a className=" active flex w-20 h-16 text-sm select-none justify-center cursor-pointer items-center flex-col active:bg-sky-700 hover:bg-neutral-700 hover:opacity-80 rounded-md transition-all mx-3">
            <span class="material-symbols-outlined">home</span>
            <div >Home</div>
          </a>
          <a className="flex w-20 h-16 text-sm select-none justify-center cursor-pointer items-center flex-col active:bg-sky-700 hover:bg-neutral-700 hover:opacity-80 rounded-md transition-all mx-3">
            <span class="material-symbols-outlined">home</span>
            <div >Home</div>
          </a>
          <a className="flex w-20 h-16 text-sm select-none justify-center cursor-pointer items-center flex-col active:bg-sky-700 hover:bg-neutral-700 hover:opacity-80 rounded-md transition-all mx-3">
            <span class="material-symbols-outlined">home</span>
            <div >Home</div>
          </a>
          <a className="flex w-20 h-16 text-sm select-none justify-center cursor-pointer items-center flex-col active:bg-sky-700 hover:bg-neutral-700 hover:opacity-80 rounded-md transition-all mx-3">
            <span class="material-symbols-outlined">home</span>
            <div >Home</div>
          </a>
        </nav>
        <div className="mt-auto"><a className="flex w-20 h-16 text-sm select-none justify-center cursor-pointer items-center flex-col active:bg-sky-700 hover:bg-neutral-700 hover:opacity-80 rounded-md transition-all mx-3">
            <span class="material-symbols-outlined">home</span>
            <div >Home</div>
          </a></div>
      </div>
    );
  }
}
