import * as React from "react";
import { useState } from "react";

interface IModalProps {
  showModal: boolean;
  title: string;
  children: React.ReactNode;
}

export default function Modal(props: IModalProps) {
  const [showModal, setshowModal] = useState(props.showModal);
  function closeModal() {
    console.log("xD");
    setshowModal(false);
  }
  return showModal ? (
    <>
      <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
        {/* overlay */}
        <div
          className="fixed left-0 top-0 z-40 flex h-screen w-screen  bg-black opacity-80"
          onClick={closeModal}
        />
        {/* actual modal */}
        <div className="z-50 flex h-2/3 max-h-96 w-fit flex-col rounded-xl bg-zinc-800">
          {/* header row */}
          <div className=" flex h-14 w-full  items-center border-b border-b-zinc-700 px-6 text-zinc-300 opacity-75">
            <p className="font-base text-xl">{props.title}</p>
            <span
              onClick={closeModal}
              className="material-symbols-outlined ml-auto cursor-pointer select-none hover:font-bold "
            >
              close
            </span>
          </div>
          {/* content */}
          <div className="mt-4 w-full border-red-700 bg-red-600 px-6">
            {props.children}
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
