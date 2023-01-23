//moving onto JSx & npm + prettier (for autoformatting)

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.species),
    React.createElement("h2", {}, props.breed),
    React.createElement("h2", {}, props.colour),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "adopt me"), // add Pet attributes
    React.createElement(Pet, {
      name: "Chewy",
      species: "Cat",
      breed: "Maine Coon",
      colour: "Ginger",
    }),
    React.createElement(Pet, {
      name: "Luna",
      species: "Dog",
      breed: "Havenese",
      colour: "Black",
    }),
    React.createElement(Pet, {
      name: "Tutti",
      species: "Cat",
      breed: "Short Hair",
      colour: "Grey",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
