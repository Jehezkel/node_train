import * as React from "react";

export interface IPostCardActionsProps {}

export default class PostCardActions extends React.Component<IPostCardActionsProps> {
  public render() {
    return (
      <div className="mt-2 flex">
        {/* comments button */}
        <div className="ml-6 flex">
          <span className="material-symbols-outlined cursor-pointer">
            message
          </span>
          <p className="ml-2">Comments</p>
        </div>
        {/* share button */}
        <div className="ml-6 flex">
          <span className="material-symbols-outlined cursor-pointer">
            share
          </span>
          <p>Share</p>
        </div>
        {/* save button */}
        <div className="ml-6 flex">
          <span className="material-symbols-outlined cursor-pointer">
            bookmark
          </span>
          <p className="ml-2">Save</p>
        </div>
        {/* more icon */}
        <div className="ml-6 flex">
          <span className="material-symbols-outlined cursor-pointer">
            more_horiz
          </span>
        </div>
      </div>
    );
  }
}
