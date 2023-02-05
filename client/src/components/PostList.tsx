import * as React from "react";
import IPost from "../models/Post";
import { PostsService } from "../services/posts.service";
import PostCard from "./PostCard";

export interface IPostListProps {
  posts: Array<IPost>;
}

export interface IPostListState {}

export default class PostList extends React.Component<
  IPostListProps,
  IPostListState
> {
  postsService: PostsService;
  constructor(props: IPostListProps) {
    super(props);
    this.postsService = new PostsService();
  }

  public render() {
    return (
      <div className="flex flex-col">
        {this.props.posts &&
          this.props.posts.map((post: IPost) => (
            <PostCard post={post} key={post.post_id}></PostCard>
          ))}
      </div>
    );
  }
}
