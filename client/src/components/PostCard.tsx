import * as React from "react";
import PostCardInfo from "./PostCardInfo";
import PostCardActions from "./PostCardMenu";
import PostCardVotes from "./PostCardVotes";

export interface IPostCardProps {
  postTitle:string;
  
}

export default class PostCard extends React.Component<IPostCardProps> {
  public render() {
    return (
      <div className="flex max-w-5xl bg-zinc-800 rounded-3xl p-3 mt-2">
        <div className="w-12 p-2 mr-2">
          <PostCardVotes upvotes={1173}/>
        </div>
        <div>
          <PostCardInfo userSlag="userx0x0" postedDate={new Date('2023-02-01')}></PostCardInfo>
          <h2 className=" text-2xl">{this.props.postTitle}</h2>
          <img
            className="rounded-3xl mt-2"
            src="https://lh3.googleusercontent.com/V7AytLCAx5XG_KFvucW0jWaPvShdentmubcY5DVJOMC2_z4USSm1H25s2sm1KmFyoQfOt1OOCAzjsB7Tdl0IwS4fzHzRdPEMXmaj6Uz7GQl8B48zhCzv=w960"
            alt=""
          />
        <PostCardActions></PostCardActions>
        </div>
        </div>
    );
  }
}
