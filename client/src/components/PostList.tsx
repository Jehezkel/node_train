import { useContext } from "react";
import { PostContext } from "../context/postContext";
import IPost from "../models/Post";
import PostCard from "./PostCard";

export default function PostList() {
  const { posts } = useContext(PostContext);
  return (
    <div className="flex flex-col">
      {posts &&
        posts.map((post: IPost, index) => (
          <PostCard post={post} key={post.post_id} />
        ))}
    </div>
  );
}
