// NotFound.js
import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <h2 className="not-found-title">404 - Not Found</h2>
        <p className="not-found-text">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
