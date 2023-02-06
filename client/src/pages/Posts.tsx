import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import { PostContextProvider } from "../context/postContext";
import IPost from "../models/Post";
import { PostsService } from "../services/posts.service";

export interface IPostsPageProps {}
export interface IPostsPageState {
  posts: IPost[];
}
export default function PostsPage() {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    refreshPosts();
  }, []);
  function addNewPost(post: IPost) {
    PostsService.create(post).then((response: any) => {
      post.post_id = response.data.post_id;
      console.log(`Received response with id ${response.data.post_id}`);
      setPosts([...posts, post]);
    });
  }
  function refreshPosts() {
    PostsService.getPosts().then((resp: any) => setPosts(resp.data as IPost[]));
  }
  function editPost(post: IPost) {
    PostsService.update(post).then(() => {
      console.log("Updated successfully");
      const postFound = posts.find((p) => p.post_id == post.post_id);
      if (postFound) {
        const postIndex = posts.indexOf(postFound);
        const newPosts = posts;
        newPosts[postIndex] = post;
        setPosts(newPosts);
      }
    });
  }

  return (
    <PostContextProvider>
      <div className="flex flex-col items-center justify-center">
        <PostForm body="" title="" addNewPost={addNewPost} />
        <PostList></PostList>
      </div>
    </PostContextProvider>
  );
}
