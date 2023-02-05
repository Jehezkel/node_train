import * as React from "react";
import PostForm from "../components/PostForm";
import IPost from "../models/Post";

export interface IHomePageProps {}

export default class HomePage extends React.Component<IHomePageProps> {
  public render() {
    return (
      <div>
        <h1>Hello its HomePage speaking.</h1>
        <PostForm
          body=""
          title=""
          addNewPost={(post: IPost): void => console.log(post)}
        ></PostForm>
      </div>
    );
  }
}
