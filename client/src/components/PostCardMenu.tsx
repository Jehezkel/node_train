import * as React from "react";

export interface IPostCardActionsProps {}

export default class PostCardActions extends React.Component<IPostCardActionsProps> {
  public render() {
    return (
      <div className="flex mt-2">
        <div className="flex ml-6">
          <span className="material-symbols-outlined cursor-pointer">
            message
          </span>
          <p className="ml-2">Comments</p>
        </div>
        <div className="flex ml-6">
          <span className="material-symbols-outlined cursor-pointer">
            share
          </span>
          <p>Share</p>
        </div>
        <div className="flex ml-6">
          <span className="material-symbols-outlined cursor-pointer">bookmark</span>
          <p className="ml-2">Save</p>
        </div>
        <div className="flex ml-6">
          <span className="material-symbols-outlined cursor-pointer">more_horiz</span>
        </div>
      </div>
    );
  }
}
