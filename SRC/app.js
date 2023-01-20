//moving onto JSx & npm + prettier (for autoformatting)
 
const Pet = (props) => {
    //add object props
    //one way data flow from App into Pet through props
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.species),
        React.createElement("h2", {}, props.breed),
        React.createElement("h2", {}, props.colour)
    ])
};


const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "adopt me"), // add Pet attributes
            React.createElement(Pet, {
                name: "Chewy",
                species: "Cat",
                breed: "Maine Coon",
                colour: "Ginger"
            }),
            React.createElement(Pet, {
                name: "Luna",
                species: "Dog",
                breed: "Havenese",
                colour: "Black"
            }),
            React.createElement(Pet, {
                name: "Tutti",
                species: "Cat",
                breed: "Short Hair",
                colour: "Grey"
            })
        ]
    )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App)); //render "root" *createElement passed component "App" instead of string
                                        //could have had attributes/children like above but not needed here

// React is good for creating components.. made up of other components for reusable code (macro components made up from micro components) 
// It's a small library to learn for rendering ui, great at handling lots of state that generates interfaces from state

// JSx will use the createElement function for you


