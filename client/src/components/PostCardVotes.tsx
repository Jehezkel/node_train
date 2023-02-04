import * as React from "react";

export interface IPostCardVotesProps {
  upvotes: number;
}

export interface IPostCardVotesState {
  upvotes: number;
}

export default class PostCardVotes extends React.Component<
  IPostCardVotesProps,
  IPostCardVotesState
> {
  constructor(props: IPostCardVotesProps) {
    super(props);

    this.state = { ...this.props, upvotes: this.props.upvotes ?? 0 };
  }

  public render() {
    return (
      <div className="flex select-none flex-col items-center">
        <span
          onClick={() => this.setState({ upvotes: this.state.upvotes + 1 })}
          className="material-symbols-outlined cursor-pointer"
        >
          keyboard_arrow_up
        </span>
        <p>{this.state.upvotes}</p>
        <span
          onClick={() => this.setState({ upvotes: this.state.upvotes - 1 })}
          className="material-symbols-outlined cursor-pointer"
        >
          keyboard_arrow_down
        </span>
      </div>
    );
  }
}
