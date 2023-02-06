import * as React from "react";
import PostForm from "../components/PostForm";
import IPost from "../models/Post";

export default function HomePage() {
  return (
    <div>
      <h1>Hello its HomePage speaking.</h1>
      <PostForm body="" title=""></PostForm>
    </div>
  );
}
