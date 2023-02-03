import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error= useRouteError();
  console.error(error);
  const test:unknown = 2;
  let errorMsg:string|undefined;
  
  return (
      <div className="flex justify-center items-center flex-col h-full">
      <h1 className="text-2xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* @ts-ignore */}
        <i>{error.statusText || error.message }</i>
      </p>
    </div>
  );
}