import * as React from "react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import IPost from "../models/Post";

export interface IPostsPageProps {}

export default class PostsPage extends React.Component<IPostsPageProps> {
  addNewPost(post: IPost) {
    console.log(post);
  }
  public render() {
    return (
      <div className="flex flex-col items-center justify-center">
        <PostForm body="" title="" addNewPost={this.addNewPost} />
        <PostList></PostList>
      </div>
    );
  }
}
