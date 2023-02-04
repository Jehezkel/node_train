import * as React from "react";
import IPost from "../models/Post";
import PostCardInfo from "./PostCardInfo";
import PostCardActions from "./PostCardMenu";
import PostCardVotes from "./PostCardVotes";

export interface IPostCardProps {
  post: IPost;
}

export default class PostCard extends React.Component<IPostCardProps> {
  public render() {
    return (
      <div className="mt-2 flex max-w-5xl rounded-3xl bg-zinc-800 p-3">
        <div className="mr-2 w-12 p-2">
          <PostCardVotes upvotes={this.props.post.upvotesCnt} />
        </div>
        <div>
          <PostCardInfo
            userSlag="userx0x0"
            postedDate={new Date("2023-02-01")}
          ></PostCardInfo>
          <h2 className=" text-2xl">{this.props.post.title}</h2>
          <img
            className="mt-2 rounded-3xl"
            src="https://lh3.googleusercontent.com/V7AytLCAx5XG_KFvucW0jWaPvShdentmubcY5DVJOMC2_z4USSm1H25s2sm1KmFyoQfOt1OOCAzjsB7Tdl0IwS4fzHzRdPEMXmaj6Uz7GQl8B48zhCzv=w960"
            alt=""
          />
          <PostCardActions></PostCardActions>
        </div>
      </div>
    );
  }
}
