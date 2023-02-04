import * as React from "react";

export interface IHomePageProps {}

export default class HomePage extends React.Component<IHomePageProps> {
  public render() {
    return (
      <div>
        <h1>Hello its HomePage speaking.</h1>
      </div>
    );
  }
}
