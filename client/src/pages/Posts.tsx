import * as React from "react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import IPost from "../models/Post";
import { PostsService } from "../services/posts.service";

export interface IPostsPageProps {}
export interface IPostsPageState {
  posts: IPost[];
}
export default class PostsPage extends React.Component<
  IPostsPageProps,
  IPostsPageState
> {
  postsService: PostsService = new PostsService();
  constructor(props: IPostsPageProps) {
    super(props);
    this.state = { posts: [] };
    this.addNewPost = this.addNewPost.bind(this);
  }
  addNewPost(post: IPost) {
    this.postsService.create(post).then(() => {
      let newState = this.state;
      newState.posts.push(post);
      this.setState(newState);
    });
  }
  componentDidMount() {
    this.postsService
      .getPosts()
      .then((resp) => this.setState({ posts: resp.data }));
  }
  public render() {
    return (
      <div className="flex flex-col items-center justify-center">
        <PostForm body="" title="" addNewPost={this.addNewPost} />
        <PostList posts={this.state.posts}></PostList>
      </div>
    );
  }
}
