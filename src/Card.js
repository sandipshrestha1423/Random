import React from "react";

function Card() {
  return (
    <>
      <div className="card">
        <div className="box bg-primary"></div>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="button">
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Card;
