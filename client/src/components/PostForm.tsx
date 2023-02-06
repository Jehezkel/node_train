import * as React from "react";
import { useContext, useState } from "react";
import { objectify } from "tslint/lib/utils";
import { PostContext } from "../context/postContext";
import IPost from "../models/Post";
// TODO add handling for images and links
export interface IPostFormProps {
  title?: string;
  body?: string;
}

export interface IPostFormState {
  title: string;
  body: string;
  submitted: boolean;
}

export default function PostForm(props: IPostFormProps) {
  const [formState, setFormState] = useState({
    title: props.title ?? "",
    body: "",
    submitted: false,
  });
  const { addPost } = useContext(PostContext);

  // constructor(props: IPostFormProps) {
  //   super(props);
  //   this.inputChange = this.inputChange.bind(this);
  //   this.submit = this.submit.bind(this);
  //   console.log(this.state);
  // }
  function inputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const propName = event.target.getAttribute("data-state-prop") as string;
    const newValue = event.target.value;
    setFormState({ ...formState, [propName]: newValue });
  }
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const postToBeAdded = {
      title: formState.title,
      body: formState.body,
    } as IPost;
    console.log("i will send form: ", postToBeAdded);
    addPost(postToBeAdded);
  }
  return (
    <div className="flex h-8 w-full max-w-md flex-col overflow-y-hidden transition-[height]  delay-200 hover:h-36">
      <form onSubmit={submit}>
        <div className="h-8">
          <input
            placeholder="Title"
            data-state-prop="title"
            onChange={inputChange}
          ></input>
        </div>
        <div id="" className="h-8">
          <textarea
            data-state-prop="body"
            onChange={inputChange}
            placeholder="Body"
            className="h-full"
          ></textarea>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
