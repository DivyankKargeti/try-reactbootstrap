import React from "react";
import "./App.css";
// Importing React-Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Adding Components
import NavbarComp from "./components/NavbarComp";
import JumbotronComp from "./components/JumbotronComp";
import CarouselComp from "./components/CarouselComp";

const App = () => {
  return (
    <div className="App">
      <NavbarComp />
      <JumbotronComp />
      <CarouselComp />
    </div>
  );
};

export default App;
