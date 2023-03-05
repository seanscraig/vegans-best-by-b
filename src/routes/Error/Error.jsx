import { useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
