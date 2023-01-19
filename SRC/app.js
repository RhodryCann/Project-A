const Pet = () => {

    return React.createElement("div", {}, [ //Create array of components (Pet attributes)
        React.createElement("h1", {}, "PetName"), //component1 (name)
        React.createElement("h2", {}, "PetSpecies"), //component2 (species)
        React.createElement("h2", {}, "PetBreed") //component3 (breed)
    ])
};


const App = () => {
    return React.createElement(
        "div", //create tag called 'div'.. <div> tag
        {}, //What are its Attributes
        React.createElement("h1",{},"adopt me") //children to look at
        //^^^creates a div, then creates a h1 within div and outputs text in h1
    ) 
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App)); //render "root" *createElement passed component "App" instead of string
                                        //could have had attributes/children like above but not needed here

// React is good for creating components.. made up of other components for reusable code (macro components made up from micro components) 
// It's a small library to learn for rendering ui, great at handling lots of state that generates interfaces from state

// JSx will use the createElement function for you


