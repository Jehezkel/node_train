import * as React from "react";
import PostCard from "../components/PostCard";

export interface IPostsPageProps {}

export default class PostsPage extends React.Component<IPostsPageProps> {
  public render() {
    return (
      <div className="flex flex-col items-center justify-center">
        <PostCard postTitle="UmpaLumpa title"></PostCard>
        <PostCard postTitle="UmpaLumpa title"></PostCard>
        <PostCard postTitle="UmpaLumpa title"></PostCard>
        <PostCard postTitle="UmpaLumpa title"></PostCard>
        <PostCard postTitle="UmpaLumpa title"></PostCard>
        <PostCard postTitle="UmpaLumpa title"></PostCard>
        <PostCard postTitle="UmpaLumpa title"></PostCard>
        <PostCard postTitle="UmpaLumpa title"></PostCard>
        <PostCard postTitle="UmpaLumpa title"></PostCard>
        <PostCard postTitle="UmpaLumpa title"></PostCard>
      </div>
    );
  }
}
