import * as React from "react";
import moment, { Moment } from "moment";

export interface IPostCardInfoProps {
  userSlag: string;
  postedDate: Date;
}

export default class PostCardInfo extends React.Component<IPostCardInfoProps> {
  public render() {
    return (
      <div className=" flex text-sm ">
        <p>Posted by u/{this.props.userSlag}</p>
        <p className="ml-4">{moment(this.props.postedDate).fromNow()}</p>
      </div>
    );
  }
}
