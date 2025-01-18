import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  const navigate = useNavigate();
  const errorHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>{error.status}</h1>
      <h2>Oops!</h2>
      <p>
        {error.status === 404 && error.statusText}, Please go back and try again
      </p>
      <button onClick={errorHandler}>Go Back</button>
    </div>
  );
};

export default ErrorPage;
