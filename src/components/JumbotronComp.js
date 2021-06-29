import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const JumbotronComp = () => {
  return (
    <Jumbotron>
      <h1>React-Bootstrap !</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi.
      </p>
      <p>
        <Button variant="danger">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default JumbotronComp;
