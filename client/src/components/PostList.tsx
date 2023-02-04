import * as React from "react";
import IPost from "../models/Post";
import { PostsService } from "../services/posts.service";
import PostCard from "./PostCard";

export interface IPostListProps {}

export interface IPostListState {
  posts: Array<IPost>;
}

export default class PostList extends React.Component<
  IPostListProps,
  IPostListState
> {
  postsService: PostsService;
  constructor(props: IPostListProps) {
    super(props);
    this.postsService = new PostsService();
    this.state = {
      posts: [],
    };
  }
  componentDidMount(): void {
    this.retrivePosts();
  }
  setPosts() {}
  retrivePosts() {
    console.log("Called retrive posts");
    this.postsService.getPosts().then((response) => {
      this.setState({ posts: response.data });
    });
  }
  public render() {
    return (
      <div className="flex flex-col">
        {this.state.posts &&
          this.state.posts.map((post: IPost) => (
            <PostCard post={post} key={post.post_id}></PostCard>
          ))}
      </div>
    );
  }
}
