import { createContext, useEffect, useState } from "react";
import IPost from "../models/Post";
import { ReactNode } from "react";
import { PostsService } from "../services/posts.service";

export type PostContextType = {
  posts: IPost[];
  addPost: (post: IPost) => void;
  updatePost: (post: IPost) => void;
  deletePost: (id: number) => void;
  votePost: (post: IPost, vote: number) => void;
};

export const PostContext = createContext<PostContextType>({
  posts: [],
  addPost: function (post: IPost): void {
    throw new Error("Function not implemented.");
  },
  updatePost: function (post: IPost): void {
    throw new Error("Function not implemented.");
  },
  deletePost: function (id: number): void {
    throw new Error("Function not implemented.");
  },
  votePost: function (post: IPost, vote: number): void {
    throw new Error("Function not implemented.");
  },
});

export const PostContextProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    PostsService.getPosts().then((resp: any) => setPosts(resp.data));
  }, []);
  function addPost(post: IPost) {
    PostsService.create(post).then((response: any) => {
      console.log("Saved succesfully", post);
      console.log("Response received ", response);
      post.post_id = response.data.post_id;
      setPosts([...posts, post]);
    });
  }
  function deletePost(id: number) {
    PostsService.delete(id).then(() => {
      console.log(`removed post with id ${id}`);
      setPosts(posts.filter((p) => p.post_id != id));
    });
  }
  function updatePost(post: IPost) {
    PostsService.update(post).then(() => {
      console.log("Updated successfully post id ", post.post_id);
      setPosts(posts.map((p) => (p.post_id === post.post_id ? post : p)));
    });
  }
  function votePost(post: IPost, vote: number) {
    const voteToSubmit = post.user_vote === vote ? 0 : vote;
    PostsService.vote(post, voteToSubmit).then(() => {
      post.upvotes_cnt +=
        post.user_vote === 1 ? -1 : voteToSubmit === 1 ? 1 : 0;
      post.downvotes_cnt +=
        post.user_vote === -1 ? -1 : voteToSubmit === -1 ? 1 : 0;
      post.user_vote = voteToSubmit;
      setPosts(posts.map((p) => (p.post_id === post.post_id ? post : p)));
    });
  }
  return (
    <PostContext.Provider
      value={{
        posts: posts,
        addPost: addPost,
        deletePost: deletePost,
        updatePost: updatePost,
        votePost: votePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
