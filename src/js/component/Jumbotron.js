import React from "react";

  const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4"><strong>A Warm Welcome!</strong></h1>
            <div className="Texto">
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            </div>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </div>
    );
};
export default Jumbotron;