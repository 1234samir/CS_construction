import React from "react";

export const Featurette = () => (
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading">
        First featurette heading.{" "}
        <span className="text-muted">It’ll blow your mind.</span>
      </h2>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis dolor
        dictum, tempus arcu quis, eleifend dui. Donec consectetur nulla dictum,
        dictum nisi vitae, malesuada augue.
      </p>
    </div>
    <div className="col-md-5">
      <svg
        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
        width="500"
        height="500"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: 500x500">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#eee" />
        <text x="50%" y="50%" fill="#aaa" dy=".3em">
          500x500
        </text>
      </svg>
    </div>
  </div>
);
