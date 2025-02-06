import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const RouterError = () => {
  const error:any = useRouteError();
  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText || error.data?.message || "An error occurred"
    : error instanceof Error
    ? error.message
    : "An unknown error occurred";

  return (
    <section className="route_error">
      <div className="error">
      <h1>Error Uncaught</h1>
      <div className="error_content">
      <small>{errorMessage}</small>
      </div>
      </div>
    </section>
  );
};

export default RouterError;