import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops! Something went wrong 😕</h1>
      <p>{error.statusText || error.message}</p>
      <a href="/" style={{ color: "blue" }}>Go Back Home</a>
    </div>
  );
};

export default ErrorPage;
