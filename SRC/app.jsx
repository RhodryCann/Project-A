//import React from 'react';
//import ReactDOM from 'react-dom';  *includes entire library - use {} to specify exactly what from the library is included
import { createRoot } from 'react-dom/client';
import Pet from './Pet';


const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "adopt me"), // add Pet attributes
  //   React.createElement(Pet, {
  //     name: "Chewy",
  //     species: "Cat",
  //     breed: "Maine Coon",
  //     colour: "Ginger",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     species: "Dog",
  //     breed: "Havenese",
  //     colour: "Black",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Tutti",
  //     species: "Cat",
  //     breed: "Short Hair",
  //     colour: "Grey",
  //   }),
  // ]);
    <div>
      <h1>Adopt Me app</h1>
      <Pet name="Luna" species="dog" breed="Havanese" colour="Black" />
      <Pet name="Chewy" species="cat" breed="Maine Coon" colour="Ginger" />
      <Pet name="Tutti" species="cat" breed="Short Hair" colour="Grey" />
    </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
