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
    <div className="flex h-full max-h-96 w-full max-w-md flex-col overflow-y-hidden ">
      <form onSubmit={submit} className="mx-auto flex h-full w-fit flex-col ">
        <div>
          <input
            className="w-full rounded-md border border-zinc-500 bg-transparent p-2 outline-none"
            placeholder="Title"
            data-state-prop="title"
            onChange={inputChange}
          ></input>
        </div>
        <div id="" className="mt-4">
          <textarea
            data-state-prop="body"
            onChange={inputChange}
            placeholder="Body"
            className="w-full rounded-md border border-zinc-500 bg-transparent p-2 outline-none"
          ></textarea>
        </div>
        <button
          className="mx-auto mt-auto rounded-md bg-green-600 px-6 py-2"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}
