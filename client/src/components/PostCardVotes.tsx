import * as React from "react";
import { useContext, useState } from "react";
import { PostContext } from "../context/postContext";
import IPost from "../models/Post";
import { PostsService } from "../services/posts.service";

export interface IPostCardVotesProps {
  post: IPost;
}

export interface IPostCardVotesState {
  upvotes: number;
}

export default function PostCardVotes(props: IPostCardVotesProps) {
  // const [votes, setvotes] = useState(props.upvotes);
  const [currentVote, setCurrentVote] = useState<number>();
  // function vote(vote: number) {}
  const { votePost } = useContext(PostContext);

  return (
    <div className="flex select-none flex-col items-center">
      <span
        onClick={() => votePost(props.post, 1)}
        className={
          (props.post.user_vote == 1 ? "font-bold text-green-600 " : "") +
          "material-symbols-outlined cursor-pointer "
        }
      >
        keyboard_arrow_up
      </span>
      <p>{props.post.upvotes_cnt - props.post.downvotes_cnt}</p>
      <span
        onClick={() => votePost(props.post, -1)}
        className={
          (props.post.user_vote == -1 ? "font-bold text-red-600 " : "") +
          "material-symbols-outlined cursor-pointer "
        }
      >
        keyboard_arrow_down
      </span>
    </div>
  );
}
