import * as React from "react";
import { objectify } from "tslint/lib/utils";
import IPost from "../models/Post";
// TODO add handling for images and links
export interface IPostFormProps {
  title?: string;
  body?: string;
  addNewPost: (post: IPost) => void;
}

export interface IPostFormState {
  title: string;
  body: string;
  submitted: boolean;
}

export default class PostForm extends React.Component<
  IPostFormProps,
  IPostFormState
> {
  state = { title: this.props.title ?? "", body: "", submitted: false };
  constructor(props: IPostFormProps) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
    this.submit = this.submit.bind(this);
    console.log(this.state);
  }
  inputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    type DataAttribute = keyof IPostFormState;
    const propName = event.target.getAttribute("data-state-prop") as string;
    const newValue = event.target.value;
    this.setState({ ...this.state, [propName]: newValue });
    console.log(propName);
  }
  submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const postToBeAdded = {
      title: this.state.title,
      body: this.state.body,
    } as IPost;
    console.log("i will send form: ", postToBeAdded);
    this.props.addNewPost(postToBeAdded);
  }
  public render() {
    return (
      <div className="flex h-8 w-full max-w-md flex-col overflow-y-hidden transition-[height]  delay-200 hover:h-36">
        <form onSubmit={this.submit}>
          <div className="h-8">
            <input
              placeholder="Title"
              data-state-prop="title"
              onChange={this.inputChange}
            ></input>
          </div>
          <div id="" className="h-8">
            <textarea
              data-state-prop="body"
              onChange={this.inputChange}
              placeholder="Body"
              className="h-full"
            ></textarea>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
