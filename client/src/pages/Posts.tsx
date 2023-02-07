import { useContext, useEffect, useState } from "react";
import Modal from "../components/Modal";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import { PostContext, PostContextProvider } from "../context/postContext";
import IPost from "../models/Post";
import { PostsService } from "../services/posts.service";

export interface IPostsPageProps {}
export interface IPostsPageState {
  posts: IPost[];
}
export default function PostsPage() {
  return (
    <PostContextProvider>
      <div className="flex flex-col items-center justify-center">
        <Modal showModal={true} title="MyModal">
          <PostForm body="" title="" />
        </Modal>

        <PostList></PostList>
      </div>
    </PostContextProvider>
  );
}
