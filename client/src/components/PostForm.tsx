import * as React from "react";
import IPost from "../models/Post";
// TODO add handling for images and links
export interface IPostFormProps {
  title: string;
  body: string;
  addNewPost: (post: IPost) => void;
}

export interface IPostFormState {}

export default class PostForm extends React.Component<
  IPostFormProps,
  IPostFormState
> {
  constructor(props: IPostFormProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className="max-w-md: flex h-11 w-full">
        <fieldset className="h-10 p-0 w-full border border-slate-400">
          <legend className="ml-4 text-sm">Test</legend>
          <input
            type="text"
            className="m-0 relative border-4 border-red-600"
          ></input>
        </fieldset>
      </div>
    );
  }
}
