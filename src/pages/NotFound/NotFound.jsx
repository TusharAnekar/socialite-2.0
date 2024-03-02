import { NavLink } from "react-router-dom";

import "../NotFound/notFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page-container">
      <div className="not-found-container">
        <h1>404</h1>
        <h2>Oops! page not found</h2>
        <p>
          There is an error in the URL you have entered in your browser Please
          check the spelling and try again. The page you are looking for may
          have been moved, updated or deleted
        </p>
        <NavLink to={"/"} className={"home-link"}>
          Continue to Home
        </NavLink>
      </div>
    </div>
  );
};

export { NotFound };
